import axios from 'axios';
//conexión de back y front

export function getAllCountries() {
    return async function(dispatch) {    
        var json = await axios.get('https://immense-cove-55832.herokuapp.com/countries', {
        });         
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data
        });
    }
}
// http://localhost:3001/countries


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
        var json = await axios.get('https://immense-cove-55832.herokuapp.com/activityCreate', {
        });         
        return dispatch({
            type: 'GET_ACTIVITY',
            payload: json.data
        });
    }
}
// http://localhost:3001/activityCreate
export const filterCountryByContinent = (payload) => {
    return {
        type: "FILTER_BY_CONTINENT",
        payload,
    };
};

export function SearchCountries(name) {
    return async function(dispatch) {
        try {
            let json = await axios.get(`https://immense-cove-55832.herokuapp.com/countries?name=${name}`)
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
// http://localhost:3001/countries?name=${name}


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
        const addingActivity = await axios.post('https://immense-cove-55832.herokuapp.com/activityCreate', payload); 
        console.log(addingActivity)        
        return addingActivity;
    }
}
// http://localhost:3001/activityCreate

export function CountryById(id) {
    return async function(dispatch) {
        try {
            const response = await axios.get(`https://immense-cove-55832.herokuapp.com/countries/${id}`)
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
// http://localhost:3001/countries/${id}

export function filterByActivity(payload) {
    return {
        type: "FILTER_BY_ACTIVITY",
        payload,
    };
}