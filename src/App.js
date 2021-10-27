import {Background} from "./components/Background.style";
import "./reset.css";
import NavSection from "./sections/NavSection.style";
import {SectionDivider} from "./components/SectionDivider.style";
import DataSection from "./sections/DataSection";
import RescueShipsSection from "./sections/RescueShipsSection";
import React from "react";
import {DataType} from "./components/DataType.style";
import {DataInfo} from "./components/DataInfo.style";
import {Recover} from "./components/Recover.style";
import {Button} from "./components/Button.style";
import {Container} from "./components/Container.style";
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
      weight_kg
    }
    id
  }
}
`


function App() {
    const [launches, setLaunches] = React.useState([])

    React.useEffect(() => {
        fetch('https://api.spacex.land/graphql/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: LAUNCHES_QUERY })
        }).then(response => response.json())
            .then(data => setLaunches(data.data.launchesPast))
    },[]);

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
                      <Button key={launch.id}><a href={launch.links.article}>Learn more</a></Button>
                  </>

                  <>
                      <DataType margin={'0 0 0 20px'}>Launch Date</DataType>
                      <DataInfo margin={'0 0 19px 20px'} fontSize={'1.2rem'} fontWeight={'500'} key={launch.id}>{launch.launch_date_local}</DataInfo>
                      <DataType margin={'0 0 0 20px'}>launch site</DataType>
                      <DataInfo margin={'0 0 19px 20px'} fontSize={'1.2rem'} fontWeight={'500'} key={launch.id}>{launch.launch_site.site_name}</DataInfo>
                  </>
                </Container>
                <SectionDivider background={'#5C5C5D'}/>
                <RescueShipsSection/>
              </>
              ))};

      </Background>
  );
}

export default App;
