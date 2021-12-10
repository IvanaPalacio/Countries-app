
import styled from "styled-components";

export const CountryCardLists = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 15px;
    margin-top: 10px;
`
export const Container = styled.div`
display: flex;
flex-direction: column;
background-attachment: fixed;
background-size: cover;
margin-top: -60px;
padding: 1px 1px;

`
export const Container2 = styled.div`
margin-top: 40px;
margin-botton: 50px;
padding: -100px;

`

export const ContainerMaster = styled.div`
background-color: #f1f1f1;
// background-position: center;
// background-size: cover;
// background-repeat: no-repeat;
background-attachment: fixed;
// margin: 100%;
position: fixed;
z-index: -1;
width: 104%;
height: 140%;
top: -180px;
left: -25px;
// opacity: 0.65;
transition: all 300ms ease-in-out;
`
export const Select = styled.select`
background-color: #003580;
color: white;
cursor: pointer;
font-size: 12px;
padding: 4px 12px;
border: 3px solid #003580;
`
