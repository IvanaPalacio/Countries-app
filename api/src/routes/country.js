// const { Router } = require('express')
// const router = Router()
const express = require('express');
const router = express.Router();
const {Country, Touring, country_touring} = require('../db');
const {getDatabase, countryAllName} = require('../controllers/getDatabase.js');
const axios = require('axios');

router.get('/', async (req, res, next) => {
    try{
        const {name} = req.query;    //filtro por query los nombres
        if(name) {  //si contiene name
            const filterByName = await countryAllName(name) 
            res.status(200).json(filterByName.length ? filterByName : [{msj: 'No se encontro el nombre del pais'}]);
        }else{
            const all = await getDatabase()
            res.status(200).json(all);
        }
    }catch(err){
        next(err);
    };
});

router.post('/', (req, res, next) => {
    res.send('soy post/countries')
})

router.put('/', (req, res, next) => {
    res.send('soy put/countries')
})

router.delete('/', (req, res, next) => {
    res.send('soy delete/countries')
})

module.exports = router;