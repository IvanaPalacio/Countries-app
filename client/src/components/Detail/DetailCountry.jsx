import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../Nav/Nav'


export function CountryDetailById() {
    const country = useSelector((dataStore) => dataStore. detailCountryById)
    const activityDetail = useSelector((dataStore) => dataStore. activity)
    console.log("datacountry:", country)
    
        return (
        <div>
            <Nav/>    
            <div>
                <h2> {country.name} </h2>

                <img src= {country.image} alt="Image not found" />
            
                <h3>Code: </h3>
                <h4>{country.id}</h4>
                <h3>capital: </h3>
                <h4>{country.capital}</h4>
                <h3>subregion: </h3>
                <h4>{country.subregion}</h4>
                <h3>area: </h3>
                <h4>{country.area}</h4>
                <h3>population: </h3>
                <h4>{country.population}</h4>
                
                <strong>Activities:</strong>
                <div className="detailActivities">
                    { activityDetail.season ?  activityDetail.season.map((breed, index) => (
                        <h4 key={index}> {breed.name} </h4>
                    )) 
                    : <h4 className="temperament"> {country.season} </h4> } 
                </div>
            </div>
        </div>
    )
}

export default CountryDetailById;














