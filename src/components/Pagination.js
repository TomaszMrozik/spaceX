import React from 'react';
import {PathButton} from "./Nav/PathButton.style";
import {Logo} from "./Logo.style";
import spacexLogo from "../assets/spacex-logo-black-and-white.png";
import {Container} from "./Generic/Container.style";

const Pagination = ({ launchesPerPage, totalLaunches, nextPage, previousPage }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalLaunches / launchesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
            <Container justifyContent={'space-between'} alignItems={'center'} height={'6rem'}>
                <PathButton onClick={() => nextPage()} href={'!#'} transform={'135deg'} margin={'0 .8rem 0 2rem'} />
                <a href="." onClick="window.location.reload(true);"><Logo src={spacexLogo}/></a>
                <PathButton onClick={() => previousPage()} transform={'-45deg'}  margin={'0 2rem 0 .8rem'}/>
            </Container>
    );
};

export default Pagination;