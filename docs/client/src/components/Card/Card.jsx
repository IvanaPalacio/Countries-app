import React from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import { CountryById } from '../../actions/index';
import {Link} from 'react-router-dom';
import styles from './Card.module.css';


export default function Card({ name, continents, population, img, id }){
    console.log(id)
    const dispatch = useDispatch();
    return(
            <div className={styles.card}>
                <Link to = {`/country/${id}`} key={id}>
                    <div>
                        <fragment className={styles.imgStyle}>
                        <img src={img} alt='img not found' width='70px' height='70px'/> 
                        </fragment>
                        <h3 className={styles.cityName}>{name}</h3>
                    </div>
                    <div className={styles.data}>
                        <label>Continent :</label>
                        <h5 className={styles.da}>{continents}</h5>
                        <label>Population :</label>
                        <h5 className={styles.da}>{population}</h5>
                    </div>
                    <button className={styles.verMasButton} onClick={() => dispatch(CountryById(id))}>ver</button>
                </Link>
            </div>      
        )
}