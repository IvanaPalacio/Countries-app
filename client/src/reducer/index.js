
const initialState = {
    countries: [],
    countries2: [],
    activity: [],
    detailCountryById: [] 

}

function rootReducer(state = initialState, action ) {
    switch(action.type){
        case 'GET_COUNTRIES':
        return{
            ...state,
            countries : action.payload,
            countries2 : action.payload
        }
        case 'COUNTRY_DETAIL_BY_ID_CARD':
            console.log('action',action.payload)
            return {
                ...state,
                detailCountryById: action.payload
            }
        case 'GET_ACTIVITY':
            return{
                ...state,
                activity : action.payload
            }
        case 'FILTER_POPULATION':
            let sortedArr = action.payload === 'ASC' ? 
            state.countries.sort(function(a,b){
            if(a.population > b.population){
            return 1;
            }
            if(b.population > a.population){
                return -1;
            }
            return 0;
        }) : 
        state.countries.sort(function (a,b){
            if(a.population < b.population){
                return 1;
            }
            if(b.population < a.population){
                return -1;
            }return 0;
        });
        return{
            ...state,
            countries: sortedArr
        }  
        case 'ORDER_BY_NAME':
            if(action.payload === 'none'){
                return{
                    ...state,
                    countries: state.countries,
                };
            }
            if(action.payload === 'name_asc'){
                return{
                    ...state,
                    countries: [
                        ...state.countries.sort((a,b) => a.name.localeCompare(b.name)),
                    ],
                }
            }
            if(action.payload === 'name_desc'){
                return{
                    ...state,
                    countries: [
                        ...state.countries.sort((a,b) => b.name.localeCompare(a.name)),
                    ]
                }
            }
            case "FILTER_BY_CONTINENT":
            const countries2 = state.countries2;
            const continentFound = action.payload === "All" ? countries2 : countries2.filter((e) => e.continents === action.payload);
            return {
                ...state,
                countries: continentFound,
            };
            case 'SEARCH_COUNTRY': 
            console.log('name3',action.payload)
                return{
                    ...state,
                    countries: action.payload
            }
            case 'POST_ACTIVITY':
                return{
                    ...state,
                }
            case "FILTER_BY_ACTIVITY":
                const countryFilter = state.countries2;
                console.log('hola',action.payload)
                let countriesByActivity = [];
                if (action.payload === "all") {
                    countriesByActivity = countryFilter;
                } else {
                    console.log('hola2',countryFilter)
                    countriesByActivity = countryFilter.filter((c) => {
                        if (c.tourings) {
                            for (let i = 0; i < c.tourings.length; i++) {
                                if (c.tourings[i].name === action.payload) {
                                    console.log(c.tourings[i].name)
                                    return c;
                                }
                            }
                        }
                    });
                }
                console.log('superFiltro',countriesByActivity);
                return {
                    ...state,
                    countries: countriesByActivity
                }
            default:
            return state;
            
    }
}

export default rootReducer;


