// const { Router } = require('express')
// const router = Router()
const express = require('express');
const router = express.Router();
const {Country, Touring, country_touring} = require('../db');
const {getDatabase, countryAllName, countryIdentifier} = require('../controllers/getDatabase.js');
const axios = require('axios');

router.get('/', async (req, res, next) => {
    try{
        const {name} = req.query;    //filtro por query los nombres
        if(name){  //si contiene name
            const filterByName = await countryAllName(name) 
            res.status(200).send(filterByName.length ? filterByName : [{msj: 'No se encontro el nombre del pais'}]);
        }else{
            const all = await getDatabase()
            res.status(200).json(all);
        }
    }catch(err){
        next(err);
    };
});


router.get('/:idPais', async (req, res, next) => {
    try{
        var { idPais } = req.params
        var particularDetail = await countryIdentifier(idPais)
        res.status(200).send(particularDetail)
    }catch (error) {
        next(error)
    }
});


router.post('/activity', async (req,res) => {
    const { 
        name,
        difficulty,
        duration,
        season,
        countries
    } = req.body;
try{    
    const [newActivity, created] = await Touring.findOrCreate({
        where:{name: name},
        defaults: {
            difficulty,
            duration,
            season
        }
    });
    for(let element of countries ){
        let country = await Country.findByPk(element);
        await country.addTouring(newActivity);
    }
    res.json("Actividad creada exitosamente");
}catch(err){
    res.json({mensaje: "No se pudo crear la actividad"})
    }
});

module.exports = router;