const axios = require('axios');
const {Country, Touring, country_touring} = require('../db');
const { Op } = require('sequelize');

const getDatabase = async ()=>{
    
    let countries = await Country.findAll({
        attributes: ['id', 'name', 'image', 'continents', 'capital' , 'population', 'area']
    });
    if(!countries.length){
        var allCountry = await axios.get('https://restcountries.com/v3/all');
        var allCountry2 = allCountry.data?.map(e => {
            return{
                id : e.cca3,
                name : e.name.common ? e.name.common : 'No se encontró nada',
                image : e.flags[0] ? e.flags[0] : 'No se encontró nada',
                continents : e.continents.length ? e.continents.join(', ') : 'No se encontró nada',
                capital : e.capital? e.capital.join(', ') : 'No se encontró nada',
                subregion : e.subregion ? e.subregion : 'No se encontró nada',
                area : e.area ? parseInt(e.area) : 0,
                population : e.population ? parseInt(e.population) : 0
            }
    });
        await Country.bulkCreate(allCountry2)
    }
    countries = await Country.findAll({
        attributes: ['id', 'name', 'image', 'continents', 'capital', 'subregion', 'area', 'population'],
        include: Touring,
    });
    return countries;
}

const countryAllName = async (name) => {
    name = name.length ? name[0].toUpperCase() + name.slice(1) : name;
    var countryName = await Country.findAll({
        attributes: [ 'id', 'name', 'image', 'continents', 'population' ],
        where: {
            name: {
                [Op.startsWith]: name
            }
        },
        include: Touring
    });
    console.log('name5',countryName);
    return countryName;
}

///////////////////////////////actividad de exposición//////////////////////////

// const continentsAllName = async (continents) => {
//     console.log('getdataBase17',continents)
//     continents = continents.length ? continents[0].toUpperCase() + continents.slice(1) : continents;
//     var countryName = await Country.findAll({
//         attributes: [ 'id', 'name', 'image', 'continents', 'population' ],
//         where: {
//             name: {
//                 [Op.startsWith]: continents
//             }
//         },
//         include: Touring
//     });
//     console.log('continents5',continentName);
//     return countryName;
// }

const countryIdentifier = async (id) => {
    let countryId = await Country.findAll({
        attributes: [ 'id', 'name', 'image', 'continents', 'capital' , 'population', 'area', 'subregion' ],
        where:{
            id:{
                [Op.eq]: id
            }
        },
        include: Touring
    })
    
    //var countryId = await Country.findByPk(id);
    return countryId
}



const getActivity = async () => {
    let activities = await Touring.findAll();
    return activities
}


// id: e.cca3,
// name: e.name.common,
// image: e.flags,
// continents: e.continents,
// capital: e.capital || 'capital no disponible',
// subregion: e.subregion,
// area: e.area,
// population: e.population


module.exports = {
    getDatabase,
    countryAllName,
    countryIdentifier,
    getActivity
}
