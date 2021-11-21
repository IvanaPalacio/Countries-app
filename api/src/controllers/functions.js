const axios = requiere('axios');
const {Country, Touring} = require('../db');

const getDatabase = async() => {
    const countries = await Country.findAll({
        attributes: ['id', 'name', 'image', 'continents', 'capital', 'subregion', 'area', 'population']
    });
    if(!countries.length) {
    const apiUrl = await axios.get('https://restcountries.com/v3/all');
    const  DataExtraction = apiUrl.data.map(e => {
        return{
        id = e.cca3,
        name = e.name,
        image = e.flags,
        continents = e.region,
        capital = e.capital,
        subregion = e.subregion,
        area = e.area,
        population = e.population
        }
    });
    await Country.bulkcreate(DataExtraction);
}
countries = await Country.findAll({
    attributes: ['id', 'name', 'image', 'continents', 'capital', 'subregion', 'area', 'population'],
    include: Touring
});
    return countries;
}

