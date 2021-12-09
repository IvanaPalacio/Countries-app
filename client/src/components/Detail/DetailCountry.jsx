import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import Nav from '../Nav/Nav'
import {CountryById} from '../../actions';

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
            <div>
                <h2>{country[0]?.name}</h2>
                <img src= {country[0]?.image} alt="Image not found" width='200px' height='200px'/>
                <h3>Code: </h3>
                <h4>{country[0]?.id}</h4>
                <h3>capital: </h3>
                <h4>{country[0]?.capital}</h4>
                <h3>subregion: </h3>
                <h4>{country[0]?.subregion}</h4>
                <h3>area: </h3>
                <h4>{country[0]?.area}</h4>
                <h3>population: </h3>
                <h4>{country[0]?.population}</h4>
                
                <strong>Activities:</strong>
                <div className="detailActivities">
                    { activityDetail?.map((breed, index) => {
                        return(
                            <div>
                                <h4>{breed.name}</h4>
                                <div>{breed.difficulty}</div>
                                <div>{breed.duration}</div>
                                <div>{breed.season}</div>
                            </div>
                            )
                    })}
                </div>
            </div>
        </div>
    )
}
// key={index}

export default CountryDetailById;














