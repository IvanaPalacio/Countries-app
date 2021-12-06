import axios from 'axios';
//conexión de back y front

// //rutas
// export const MAIN_URL = 'http://localhost:3001';
// export const COUNTRIES_URL = `${MAIN_URL}/countries`;
// export const ACTIVITY_URL = `${MAIN_URL}/activity`;

// //types para enviar a reducer
// export const GET_COUNTRIES = 'GET_COUNTRIES';

export function getAllCountries() {
    return async function(dispatch) {    
        var json = await axios.get('http://localhost:3001/countries', {
        });         
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data
        });
    }
}

export function filterPopulation(payload){
    return{
        type: 'FILTER_POPULATION',
        payload
    }
}

export function filterByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function getAllActivities() {
    return async function(dispatch) {    
        var json = await axios.get('http://localhost:3001/activity', {
        });         
        return dispatch({
            type: 'GET_ACTIVITY',
            payload: json.data
        });
    }
}

export const filterCountryByContinent = (payload) => {
    return {
        type: "FILTER_BY_CONTINENT",
        payload,
    };
};

export function SearchCountries(name) {
    return async function(dispatch) {
        try {
            let json = await axios.get(`http://localhost:3001/countries?name=${name}`)
                console.log(json)
            return dispatch({
                    type: 'SEARCH_COUNTRY',
                    payload: json.data
            })
        } 
            catch(error) {
            console.log(error)
        }
    }
}  

export function postActivity(payload) { //lo que me llega por front para pasar por esa ruta al back
    return async function(dispatch) {    
        const addingActivity = await axios.post('http://localhost:3001/activity', payload); 
        console.log(addingActivity)        
        return addingActivity;
    }
}

export function CountryById(id) {
    return async function(dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/countries/${id}`)
            console.log("Action ID:",response.data)
            return dispatch({
                type: 'COUNTRY_DETAIL_BY_ID_CARD',
                payload: response.data
            })
        } catch(error) {
            console.log(error)
        }
    }
}

export function filterByActivity(payload) {
    return {
        type: "FILTER_BY_ACTIVITY",
        payload,
    };
}