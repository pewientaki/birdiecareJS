import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
    /* background-color: #7678ed; */
   
    background: rgb(101,108,27);
    background: linear-gradient(90deg, rgba(101,108,27,1) 7%, rgba(7,51,74,1) 15%, rgba(107,126,128,1) 23%,
    rgba(146,206,212,1) 39%, rgba(196,142,181,1) 61%, rgba(253,195,255,1) 100%, rgba(250,250,250,1) 100%);
    height: 8.5rem;
    width: 100%;

img {
    width: 7rem;
    height: 7rem;
    margin: auto;
    padding-top: 1%;
    position: absolute;
}

span {
    justify-content: center;
    align-content: center;
    display: flex;
    font-size: 7em;
    font-family: 'Kaushan Script', cursive;

}

`;

const Nav = () => {
    return (
        <NavBar>
            <section>
                <a href='/'><img src='https://image.flaticon.com/icons/svg/2104/2104945.svg' alt='logo'></img></a>
            </section>
            <span>
                Patient info
            </span>
        </NavBar>
    );
};

export default Nav;