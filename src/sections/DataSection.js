import React from 'react';
import {DataType} from "../components/DataType.style";
import {DataInfo} from "../components/DataInfo.style";
import {Button} from "../components/Button.style";
import {Container} from "../components/Container.style";
import {Recover} from "../components/Recover.style";

const DataSection = () => {
    return (
        <Container direction={'column'} alignItems={'flex-start'}>
            <>
                <DataType margin={'17px 0 0 15px'}>mission</DataType>
                <DataInfo fontSize={'2rem'} fontWeight={'700'} margin={'0 0 0 15px'}>Starlink-12 (v1.0)</DataInfo>
                <DataType margin={'20px 0 0 15px'}>rocket <Recover>recovered</Recover></DataType>
                <DataInfo margin={'0 0 0 15px'} fontSize={'1.2rem'} fontWeight={'500'}>Falcon 9</DataInfo>
                <Button>Learn more</Button>
            </>

            <>
                <DataType margin={'0 0 0 15px'}>Launch Date</DataType>
                <DataInfo margin={'0 0 19px 15px'} fontSize={'1.2rem'} fontWeight={'500'}>2020-10-06 07:29:00-04:00</DataInfo>
                <DataType margin={'0 0 0 15px'}>launch site</DataType>
                <DataInfo margin={'0 0 19px 15px'} fontSize={'1.2rem'} fontWeight={'500'}>KSC LC 39A</DataInfo>
            </>
        </Container>
    );
};

export default DataSection;