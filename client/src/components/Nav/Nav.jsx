import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
// import Button from '../Button/Button.jsx';
import styled from 'styled-components';
import Logo from '../LandingPage/Logo/bellavita.png';

export default function Nav(){


    const Button = styled.button`
    background: white;
    cursor: pointer;
    font-size: 12px;
    margin: 3em;
    padding: 4px 12px;
    border: 3px solid #427ed7;
    border-radius: 5px;
    transition: all .2s ease;

    &:hover{
        background:  #427ed7 ;
    }
    `
    const NavBar = styled.div`
    background: #003580;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-attachment: fixed;
    background-size: cover;
    `
    const LogoImg = styled.img`
    width: 200px;
    height: 100px;
`

    return(<>
        <NavBar>
        <LogoImg src={Logo} /> 
        <SearchBar/>
            <Link to = '/'>
                <Button>Landing</Button>
            </Link>
            <Link to= '/home'>
                <Button>All countries</Button>
            </Link> 
            <Link to= '/activityCreate'>
                <Button>Activity</Button>
            </Link>
        </NavBar>   
</>)
}

// export default Nav;