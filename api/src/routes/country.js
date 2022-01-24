// const { Router } = require('express')
// const router = Router()
const express = require('express');
const router = express.Router();
const {Country, Touring, country_touring} = require('../db');
const {getDatabase, countryAllName, countryIdentifier, continentsAllName} = require('../controllers/getDatabase.js');
const axios = require('axios');

router.get('/', async (req, res, next) => {
    try{
        const {name = ''} = req.query;    //filtro por query los nombres
        console.log('name4',name)
        const Country = await countryAllName(name)
        return res.status(200).json(Country)
    }catch(err){
        next(err);
    };
});


router.get('/:idPais', async (req, res, next) => {
    try{
        var { idPais } = req.params
        var particularDetail = await countryIdentifier(idPais)
        res.status(200).json(particularDetail)
    }catch (error) {
        next(error)
    }
});




module.exports = router;