import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCountries} from '../../actions';
import {Link} from 'react-router-dom';
// import Nav from '../Nav/Nav';
import Card from '../Card/Card';
// import AllCards from '../AllCards/AllCards';
// import StyledHome from '../StyledComponents/StyledHome';

export default function Home(){

    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.countries)


    useEffect(()=>{
        dispatch(getAllCountries())
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getAllCountries())
    }


    return(
        <div>
            <Link to= '/countries'>Countries</Link>
            <h1>AGUANTE ARGENTINA</h1>
            <button onClick={e=>{handleClick(e)}}>
                volver a cargar todos los personajes
            </button>
            <div>
                <select>
                    <option value= 'asc'>Pais asc</option>
                    <option value= 'desc'>Pais desc</option>
                    <option value= 'cant asc'>población asc</option>
                    <option value= 'cant desc'>población desc</option>
                </select> 
                <select>
                    <option value = 'continente'>Continente</option>
                    <option value= 'activ'>Actividad</option>
                </select>
                {allCountries?.map((el) => {
                    return(
                        <fragment className="cartas">
                            <Link to = {'/home/' + el.id}>
                                <Card name={el.name} id = {el.id} img={el.image}/> 
                            </Link>
                        </fragment>
                    );
                })}
            </div>
        </div>
    )
}

