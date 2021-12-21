import { createGlobalStyle } from "styled-components";
import font1 from './5by7/5by7.woff';
import font2 from './5by7/5by7.woff2';
import font3 from './ScalaSansWebW03LightIta/ScalaSansWebW03LightIta.woff';
import font4 from './ScalaSansWebW03LightIta/ScalaSansWebW03LightIta.woff2';
import font5 from './SFUITextSemibold/SFUITextSemibold.woff';
import font6 from './SFUITextSemibold/SFUITextSemibold.woff2';

export default createGlobalStyle`
@font-face {
    font-family: '5by7';
    src: local('5by7'), local('5by7'),
    url(${font1}) format('woff'), 
    url(${font2}) format('woff2');
    font-weight: 300;
    font-style: normal;
}

@font-face {
        font-family: 'FF+Scala+Sans';
        src: local('FF+Scala+Sans'), local('FF+Scala+Sans'),
        url(${font3}) format('woff'), 
        url(${font4}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }

@font-face {
    font-family: 'holis';
    src: local('holis'), local('holis'),
    url(${font5}) format('woff'), 
    url(${font6}) format('woff2');
    font-weight: 300;
    font-style: normal;
}    

`


