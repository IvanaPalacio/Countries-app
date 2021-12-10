import React from "react";
import styled, {css} from 'styled-components';
import Logo from '../LandingPage/Logo/bellavita.png';
import {Link} from 'react-router-dom';
// import myImage from '../LandingPage/background-travel-edit.png'
import Image1 from '../LandingPage/Background-images/Asia-2.jpg';
import Image2 from '../LandingPage/Background-images/cuidados-piel-surf.jpg';
import Image3 from '../LandingPage/Background-images/Glaciar Perito Moreno-trekking.png';
import Image4 from '../LandingPage/Background-images/images.jpg';
import Image5 from '../LandingPage/Background-images/kayak2-886x497-768x431.jpg';
import Image6 from '../LandingPage/Background-images/N3EBM55OCJDV5LUBY3J2XISDSU.jpeg';
import Image7 from '../LandingPage/Background-images/sunny-day-paragliding-interlaken (1).jpg';
import Image8 from '../LandingPage/Background-images/unnamed.jpg';
// import BackgroundImage from '../LandingPage/Background-images/travel-the-world-earth-statue-famous-wallpaper-preview-edit.png';

export default function StyledLanding(){
    const Bienvenido = styled.h3`
        font-family: 'holis';
        padding: 15px;
        color: white;
    `
    const LogoImg = styled.img`
        width: 200px;
        height: 110px;
    `
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
    const FlexContainer = styled.div`
        // border: 1px solid green;
        background: #003580;
        padding: 0px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-attachment: fixed;
        background-size: cover;
    `


////////////////////////////Pruebas///////////////////////////////////////

//     const HiSlide = styled.section`
//         position: relative;
//         width: 754px;
//         height: 292px;
//         margin: 115 auto 0;
//         ${(props) => 
//         props.isUl &&
//         css`
//         list-style: none;
//         position: relative;
//         width: 754px;
//         height: 292px;
//         margin: 0px;
//         padding: 0px;
//         `}
//         ${(props)=> 
//         props.isLi &&
//         css `
//         overflow: hidden;
//         position: absolute;
//         z-index: 0;
//         left: 377px;
//         top: 14;
//         width: 0px;
//         height: 0px;
//         margin: 0px;
//         padding: 0px;
//         border: 3px solid white;
//         background-color: #333333;
//         cursor: pointer;
//         `
//         }
//     `;

//     const PrevSlide = styled.div`
//         position: absolute;
//         top: 50%;
//         width: 40px;
//         height: 40px;
//         margin top: -20px;
//         border-radius: 50px;
//         line-height:40px;
//         text-align: center;
//         cursor: pointer;
//         background-color: white;
//         color: black;
//         transition: all 0.7s;
//         font-size: 20px;
//         font-weight: bold;
//         left: 50px;

//         &:hover{
//             opacity:1;
//             background-color:  white ;
//         }

//         &:before{
//             content: '<'
//         }

//     `;
//     const NextSlide = styled.div`
//     position: absolute;
//     top: 50%;
//     width: 40px;
//     height: 40px;
//     margin top: -20px;
//     border-radius: 50px;
//     line-height:40px;
//     text-align: center;
//     cursor: pointer;
//     background-color: white;
//     color: black;
//     transition: all 0.7s;
//     font-size: 20px;
//     font-weight: bold;
//     right: 50px;

//     &:hover{
//         opacity:1;
//         background-color:  white ;
//     }
    
//     &:before{
//         content: '>';
//     }
//     `;
//     const PhotoSlide = styled.img`
//     width: 200px;
//     height: 100px;
//     `;

//     const FlexContainer2 = styled.div`
//     background-color: rgba(0, 53, 128, 0.5);
//     padding: 0px;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     background-attachment: fixed;
//     background-size: cover;
// `;
    return(
    <>  
        <FlexContainer>
            <LogoImg src={Logo} /> 
                <Bienvenido>¡Crea tus actividades turísticas!</Bienvenido>
            <Link to = '/home'>
                    <Button>Ingresar</Button>
            </Link>
        </FlexContainer>


    
    {/* <FlexContainer2>
        <HiSlide isUl isLi>
            <PrevSlide/>
            <NextSlide/>
                <li>
                    <PhotoSlide src={Image1}/>
                </li>
                <li>
                    <PhotoSlide src={Image2}/>
                </li>
                <li>
                    <PhotoSlide src={Image3}/>
                </li>
                <li>
                    <PhotoSlide src={Image4}/>
                </li>
                <li>
                    <PhotoSlide src={Image5}/>
                </li>
                <li>
                    <PhotoSlide src={Image6}/>
                </li>
                <li>
                    <PhotoSlide src={Image7}/>
                </li>
                <li>
                    <PhotoSlide src={Image8}/>
                </li> 
        </HiSlide>
    </FlexContainer2>         */}
    </>)
}

