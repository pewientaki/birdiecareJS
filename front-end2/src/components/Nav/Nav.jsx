import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
section{
    background-color: #7678ed;
height: 4rem;

}
width: 100%;
img {
    width: 7rem;
    height: 7rem;
    margin: auto;
    padding-top: 1%;
}
`;

const Nav = () => {
    return (
        <NavBar>
            <section>
                <img src='https://image.flaticon.com/icons/svg/2104/2104945.svg' alt='logo'></img>
                <h1>Patient</h1>
            </section>
            <section>

            </section>
        </NavBar>
    );
};

export default Nav;