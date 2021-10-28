import React from 'react';
import {PathButton} from "./Nav/PathButton.style";
import {Logo} from "./Logo.style";
import spacexLogo from "../assets/spacex-logo-black-and-white.png";
import {Container} from "./Generic/Container.style";

const Pagination = ({ totalLaunches, nextPage, previousPage, currentPage }) => {

    const pageNumbers = [];

    for (let i = 1; i <= totalLaunches; i++) {
        pageNumbers.push(i)
    }

    return (
            <Container justifyContent={'space-between'} alignItems={'center'} height={'6rem'}>
                <PathButton onClick={() => previousPage(currentPage)} href={'!#'} transform={'135deg'} margin={'0 .8rem 0 2rem'} />
                <a href="." onClick="window.location.reload(true);"><Logo src={spacexLogo}/></a>
                <PathButton onClick={() => nextPage(currentPage)} transform={'-45deg'}  margin={'0 2rem 0 .8rem'}/>
            </Container>
    );
};

export default Pagination;