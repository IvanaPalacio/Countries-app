import axios from 'axios';
//conexión de back y front

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
        var json = await axios.get('http://localhost:3001/activityCreate', {
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
                console.log('name2',json)
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
///////////////////////// ejercicio de exposición /////////////////////////////////////////
// export function SearchContinents(continents) {
//     return async function(dispatch) {
//         try {
//             let json = await axios.get(`http://localhost:3001/countries?continents=${continents}`)
//                 console.log('continents2',json)
//             return dispatch({
//                     type: 'SEARCH_CONTINENTS',
//                     payload: json.data
//             })
//         } 
//             catch(error) {
//             console.log(error)
//         }
//     }
// } 


export function SearchContinents(payload) {
    return {
        type: "SEARCH_CONTINENTS",
        payload,
    };
}

export function postActivity(payload) { //lo que me llega por front para pasar por esa ruta al back
    return async function(dispatch) {    
        const addingActivity = await axios.post('http://localhost:3001/activityCreate', payload); 
        console.log(addingActivity)        
        return addingActivity;
    }
}

export function CountryById(id) {
    return async function(dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/countries/${id}`)
            console.log('idNuevo', id)
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