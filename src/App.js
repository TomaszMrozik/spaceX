import {Background} from "./components/Generic/Background.style";
import "./reset.css";
import NavSection from "./sections/NavSection.style";
import {SectionDivider} from "./components/Generic/SectionDivider.style";
import React, {useState} from "react";
import {DataType} from "./components/LaunchesInfo/DataType.style";
import {DataInfo} from "./components/LaunchesInfo/DataInfo.style";
import {Recover} from "./components/LaunchesInfo/Recover.style";
import {Button} from "./components/LaunchesInfo/Button.style";
import {Container} from "./components/Generic/Container.style";
import {Loading} from "./components/Generic/Loading.style";
import {RescueShipStyle} from "./components/RescueShip/RescueShip.style";
import {ShipImg} from "./components/RescueShip/ShipImg.style";
import {ShipName} from "./components/RescueShip/ShipName.style";
import {ShipDataType} from "./components/RescueShip/ShipDataType.style";
import {ShipDataInfo} from "./components/RescueShip/ShipDataInfo.style";
const LAUNCHES_QUERY = `
{
  launchesPast(limit: 10) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
      site_name
    }
    links {
      article_link
    }
    rocket {
      rocket_name
      fairings {
        recovered
      }
    }
    ships {
      name
      home_port
      image
    }
    id
  }
}
`



function App() {
    const [launches, setLaunches] = useState([]);
    // const [ships, setShips] = useState([])
    const [loading, setLoading] = useState(false);

    React.useEffect(() => {
        setLoading(true);
        fetch('https://api.spacex.land/graphql/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: LAUNCHES_QUERY })
        }).then(response => response.json())
            .then(data => setLaunches(data.data.launchesPast))
        setLoading(false);
    },[]);


    function OpenArticle(url) {
        window.open(url, '_blank').focus();
    }

    if (loading){
        return <Loading>Loading...</Loading>
    }

  return (

      <Background>
          <NavSection/>
          <SectionDivider background={'#5C5C5D'}/>
          {launches.map(launch => (
              <>
                <Container direction={'column'} alignItems={'flex-start'}>
                  <>
                      <DataType margin={'17px 0 0 20px'} >mission</DataType>
                      <DataInfo fontSize={'2rem'} fontWeight={'700'} margin={'0 0 0 20px'} key={launch.id}>{launch.mission_name}</DataInfo>
                      <DataType margin={'20px 0 0 20px'}>rocket <Recover>recovered</Recover></DataType>
                      <DataInfo margin={'0 0 0 20px'} fontSize={'1.2rem'} fontWeight={'500'} key={launch.id}>{launch.rocket.rocket_name}</DataInfo>
                      <Button key={launch.id} onClick={() => {OpenArticle(launch.links.article_link)}}>Learn more</Button>
                  </>

                  <>
                      <DataType margin={'0 0 0 20px'}>Launch Date</DataType>
                      <DataInfo margin={'0 0 19px 20px'} fontSize={'1.2rem'} fontWeight={'500'} key={launch.id}>{launch.launch_date_local}</DataInfo>
                      <DataType margin={'0 0 0 20px'}>launch site</DataType>
                      <DataInfo margin={'0 0 19px 20px'} fontSize={'1.2rem'} fontWeight={'500'} key={launch.id}>{launch.launch_site.site_name}</DataInfo>
                  </>
                </Container>

                <SectionDivider background={'#5C5C5D'}/>

                  <Container direction={'column'}>
                      <DataType margin={'20px 0 0 20px'}>Rescue ships</DataType>
                      <Container justifyContent={'center'}>
                          {launch.ships.map((ship) => (
                          <RescueShipStyle>
                              <ShipImg src={ship.image}/>
                              <ShipName>{ship.name}</ShipName>
                              <SectionDivider background={'#E8E8E8'}/>
                              <Container justifyContent={'flex-start'} alignItems={'flex-start'}>
                                  <div>
                                      <ShipDataType>HOME PORT</ShipDataType>
                                      <ShipDataType>WEIGHT [KG]</ShipDataType>
                                  </div>
                                  <div>
                                      <ShipDataInfo>{ship.home_port}</ShipDataInfo>
                                      <ShipDataInfo>{ship.weight_kg}</ShipDataInfo>
                                  </div>
                              </Container>
                          </RescueShipStyle>
                          ))}
                      </Container>
                  </Container>

              </>
          ))};

      </Background>
  );
}

export default App;
