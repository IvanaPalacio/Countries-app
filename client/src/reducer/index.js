
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
            return {
                ...state, detailCountryById: action.payload
            }
        case 'GET_ACTIVITY':
            return{
                ...state,
                activity : action.payload
            }
        case 'FILTER_POPULATION':
            let sortedArr = action.payload === 'DESC' ? 
            state.countries.sort(function(a,b){
            if(a.name > b.name){
            return 1;
            }
            if(b.name > a.name){
                return -1;
            }
            return 0;
        }) : 
        state.countries.sort(function (a,b){
            if(a.name > b.name){
                return -1;
            }
            if(b.name > a.name){
                return 1;
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
            console.log(action.payload)
                return{
                    ...state,
                    countries: action.payload
            }
            case 'POST_ACTIVITY':
                return{
                    ...state,
                }
            case "FILTER_BY_ACTIVITY":
                const countryActivity = state.countries2;
                console.log(state.countries2)
                const countryFounded = countryActivity.filter((c) => {
                    if (c.length > 0) {
                    for (let i = 0; i < c.length; i++) {
                    if (c[i].name === action.payload) return c;
                        }
                    }
                    });
                    return {
                    ...state,
                    countries: countryFounded,
                    };
            default:
            return state;
            
    }
}

export default rootReducer;


