import React from 'react';
import {Container} from "../components/Container.style";
import {DataType} from "../components/DataType.style";
import RescueShip from "../components/RescueShip";

const RescueShipsSection = () => {
    return (
        <Container direction={'column'}>
            <DataType margin={'20px 0 0 20px'}>Rescue ships</DataType>
            <Container justifyContent={'center'}>
                <RescueShip/>
                <RescueShip/>
                <RescueShip/>
            </Container>
        </Container>
    );
};

export default RescueShipsSection;