import React from 'react';
import {ShipImg} from "./ShipImg.style";
import {ShipName} from "./ShipName.style";
import {ShipDataType} from "./ShipDataType.style";
import {ShipDataInfo} from "./ShipDataInfo.style";
import {RescueShipStyle} from "./RescueShip.style";
import {SectionDivider} from "./SectionDivider.style";
import {Container} from "./Container.style";

const RescueShip = () => {
    return (
        <RescueShipStyle>
            <ShipImg src={'https://i.imgur.com/7VMC0Gn.jpg'}/>
            <ShipName>GO Ms Tree</ShipName>
            <SectionDivider background={'#E8E8E8'}/>
            <Container justifyContent={'flex-start'} alignItems={'flex-start'}>
                <div>
                    <ShipDataType>HOME PORT</ShipDataType>
                    <ShipDataType>WEIGHT [KG]</ShipDataType>
                </div>
                <div>
                    <ShipDataInfo>Port Canaveral</ShipDataInfo>
                    <ShipDataInfo>449964</ShipDataInfo>
                </div>
            </Container>

        </RescueShipStyle>
    );
};

export default RescueShip;