import React from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import { CountryById } from '../../actions/index';
import {Link} from 'react-router-dom';

export default function Card({ name, continents, population, img, id }){
    console.log(id)
    const dispatch = useDispatch();
    return(
            <div>
                <Link to = {`/country/${id}`} key={id}>
                
                <h3>{name} </h3>
                <h4>{continents}</h4>
                <h5>{population}</h5>
                <img src={img} alt='img not found' width='200px' height='250px'/> 
                <button onClick={() => dispatch(CountryById(id))}>Ver más</button>
                </Link>
            </div>      
        )
        console.log()
}