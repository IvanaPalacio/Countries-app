import React from "react";
import styled from 'styled-components';
import Logo from '../LandingPage/Logo/bellavita.png';
import {Link} from 'react-router-dom';


export default function StyledHome(){
const LogoImg2 = styled.img`
    width: 200px;
    height: 100px;
`
const Button2 = styled.button`
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
const FlexContainer2 = styled.div`
    border: 1px solid green;
    background-color: #003580;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-attachment: fixed;
    background-size: cover;
`
return(
    <>  
        <FlexContainer2>
            <LogoImg2 src={Logo} /> 
            <Link to = '/countries'>
                    <Button2>Countries</Button2>
            </Link>
            <Link to= '/activity'>
                <Button2>Activity</Button2>
            </Link>
        </FlexContainer2>
    </>)

}