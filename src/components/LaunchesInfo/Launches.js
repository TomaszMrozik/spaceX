import React from 'react';
import {Loading} from "../Generic/Loading.style";
import {Container} from "../Generic/Container.style";
import {DataType} from "./DataType.style";
import {DataInfo} from "./DataInfo.style";
import {Recover} from "./Recover.style";
import {Button} from "./Button.style";
import {SectionDivider} from "../Generic/SectionDivider.style";
import {RescueShipStyle} from "../RescueShip/RescueShip.style";
import {ShipImg} from "../RescueShip/ShipImg.style";
import {ShipName} from "../RescueShip/ShipName.style";
import {ShipDataType} from "../RescueShip/ShipDataType.style";
import {ShipDataInfo} from "../RescueShip/ShipDataInfo.style";

const Launches = ({ loading, launches }) => {

    function OpenArticle(url) {
        window.open(url, '_blank').focus();
    }

    if (loading) {
        return <Loading>Loading...</Loading>
    }

    return (
        <>
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
        </>
    );
};

export default Launches;