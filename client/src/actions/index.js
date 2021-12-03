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