import React from 'react';
import {PathButton} from "../components/PathButton.style";
import {Logo} from "../components/Logo.style";
import spacexLogo from "../assets/spacex-logo-black-and-white.png"
import styled from "styled-components";

const SectionWrapper = styled.section`
  max-width: 1100px;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  
`

const NavSection = () => {
    return (
        <SectionWrapper>
            <PathButton transform={'135deg'} borderColor={'#5C5C5D'} margin={'0 .8rem 0 2rem'}/>
            <Logo src={spacexLogo}/>
            <PathButton transform={'-45deg'} borderColor={'#F4F6FA'} margin={'0 2rem 0 .8rem'}/>
        </SectionWrapper>
    );
};

export default NavSection;

