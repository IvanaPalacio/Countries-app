import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import Nav from '../Nav/Nav'
import {CountryById} from '../../actions';
import styles from './DetailCountry.module.css';

export function CountryDetailById(props) {
    const country = useSelector((state) => state.detailCountryById)
    const dispatch = useDispatch()
    const activityDetail = country[0]?.tourings
    console.log("datacountry:", country.name)
    console.log('props',props)
    useEffect(() => {
        dispatch(CountryById(props.location.pathname.slice(-3))); 
    }, [dispatch, props.location.pathname]);

        return (
        <div>
            <Nav/>    
            <div className={styles.card}>
                <fragment className = {styles.imgStyle}>
                    <img src= {country[0]?.image} alt="Image not found" width='200px' height='200px'/>
                </fragment>
                <div className={styles.daa}>
                    <div className={styles.da}>
                        <h2>{country[0]?.name}</h2>
                        <h4>Code:   {country[0]?.id}</h4>
                        <h4>capital:    {country[0]?.capital}</h4>
                        <h4>subregion:  {country[0]?.subregion}</h4>
                        <h4>area:   {country[0]?.area}</h4>
                        <h4>population: {country[0]?.population}</h4>
                        
                        <strong></strong>
                        <div className="detailActivities">   
                        { activityDetail?.map((breed, index) => {
                                return(
                                    <div>
                                        <h2>Activities: {breed.name}</h2>
                                        <div>Difficulty: {breed.difficulty}</div>
                                        <div>Duration: {breed.duration}</div>
                                        <div>Season: {breed.season}</div>
                                    </div>
                                    )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
// key={index}

export default CountryDetailById;














