import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCountries, filterPopulation, filterCountryByContinent, filterByName, getAllActivities, filterByActivity} from '../../actions';
import {Link, useHistory} from 'react-router-dom';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
import {CountryCardLists} from '../Paginado/Style-CardList.jsx';
import Nav from '../Nav/Nav';
import SearchBar from '../SearchBar/SearchBar';
//STYLES
import ReactDOM from 'react-dom';
import "../../index.css";
// import Select from './Styled-Home';
import Button from '../Button/Button';

// import AllCards from '../AllCards/AllCards';
// import StyledHome from '../StyledComponents/StyledHome';

export default function Home(){
    const history = useHistory();
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.countries)
    const allActivities = useSelector((state) => state.activity)
console.log('1actividad desde el reducer', allActivities)
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setcountriesPerPage] = useState(10)
    const [orden, setOrden] = useState('')
    const indexOfLastCountry = currentPage * countriesPerPage  
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)

    const paginado = (pageNumber) =>{ 
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getAllCountries())
console.log('2actividad desde el reducer', allActivities)
        dispatch(getAllActivities())
console.log('3actividad desde el reducer', allActivities)
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getAllCountries())
    }

    function handleSort(e){   
        e.preventDefault();
        dispatch(filterPopulation(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };

    function handleFilterByName(e){   
        e.preventDefault();
        dispatch(filterByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };

    function handleFilterByContinent(e){
        dispatch(filterCountryByContinent(e.target.value));
        setCurrentPage(1);
    }

    const handleFilterByActivity = (e)=>{
        console.log('actividades&paises', filterByActivity)
        dispatch(filterByActivity(e.target.value))
        // history.push('/country')
    };

    console.log('llamando countries',allCountries)
    return(
        <div>
            <br></br>
            <div>
                <Nav/>
                <SearchBar/>
                <Button onClick={e=>{handleClick(e)}}>
                    volver a cargar todos los países
                </Button>
            </div>
            <div>
                    <select onChange = {e => handleSort(e)}>
                        <option value = 'none'>Población</option>           
                        <option value= 'ASC'>población asc</option>
                        <option value= 'DESC'>población desc</option>
                    </select>
                    <select onChange = {e => handleFilterByName(e)}> 
                        <option value = 'none'>País</option>
                        <option value= 'name_asc'>Pais asc</option>
                        <option value= 'name_desc'>Pais desc</option>
                    </select>
                <div>
                    <select onChange = {e =>  handleFilterByContinent(e)}> 
                        <option value="">Search by Continent</option>
                        <option value="All">All Countries</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                        <option value="South America">South America</option>
                        <option value="North America">North America</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Antarctica">Antarctic</option>
                    </select>
                </div>
                    <select onChange = {e => handleFilterByActivity(e)}>
                        <option value = 'none'>Actividades</option>
                        <option value = 'all'>All</option>
                        {console.log(allActivities)}
                        {allActivities && allActivities.map(activity => <option value = {activity.name}  key={activity.id}> {activity.name} </option>)}
                    </select>
                <br></br>
                <Paginado
                    countriesPerPage = {countriesPerPage}
                    allCountries = {allCountries.length}
                    paginado = {paginado} 
                />
                <CountryCardLists>
                {currentCountries?.map((el) => {
                    return(
                        <fragment className="cartas">
                            <Link to = {'/home/' + el.id}>
                                <Card name={el.name} continents = {el.continents} population = {el.population} img={el.image} id={el.id}/> 
                            </Link>
                        </fragment>
                    );
                })}
                </CountryCardLists>
            </div>
        </div>
    )
}

