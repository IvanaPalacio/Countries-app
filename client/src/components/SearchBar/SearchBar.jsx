import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {SearchCountries} from '../../actions/';
import {Filter} from '../Filter/Filter';
import styled from './SearchBar.module.css';

export function SearchBar(){

    const dispatch = useDispatch();

    const [name, setName] = useState('')


    const handleInputChange = (e) =>{
        e.preventDefault()
        setName(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(SearchCountries(name))
    }
    return(
        <div className={styled.buscador}>
            <form>
            <input type='search' placeholder = 'buscar...' onChange={(e) => handleInputChange(e)}/>
            <button type='submit' value='Buscar' onClick = {(e) => handleSubmit(e)}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;