import React from 'react';
import {PathButton} from "../components/PathButton.style";
import {Logo} from "../components/Logo.style";
import spacexLogo from "../assets/spacex-logo-black-and-white.png"
import {Container} from "../components/Container.style";


const NavSection = () => {
    return (
        <Container justifyContent={'space-between'} alignItems={'center'} height={'6rem'}>
            <PathButton transform={'135deg'} borderColor={'#5C5C5D'} margin={'0 .8rem 0 2rem'}/>
            <Logo src={spacexLogo}/>
            <PathButton transform={'-45deg'} borderColor={'#F4F6FA'} margin={'0 2rem 0 .8rem'}/>
        </Container>
    );
};

export default NavSection;

