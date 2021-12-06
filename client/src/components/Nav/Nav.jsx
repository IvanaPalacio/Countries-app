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
    margin: 1em;
    padding: 4px 12px;
    border: 3px solid #427ed7;
    border-radius: 5px;
    transition: all .2s ease;

    &:hover{
        background:  #427ed7 ;
    }
    `

    return(<>
        {/* <Header>         */}
            <Link to = '/'>
                <Button>Inicio</Button>
            </Link>
            <Link to= '/activity'>
                <Button>Activity</Button>
            </Link>
        {/* </Header> */}
            <SearchBar/>
</>)
}

// export default Nav;