// const { Router } = require('express')
// const router = Router()
// const {getActivity} = require('../controllers/getDatabase.js')
const express = require('express');
const router = express.Router();
// const {Country, Touring, country_touring} = require('../db');
// const {getDatabase, countryAllName, countryIdentifier} = require('../controllers/getDatabase.js');
const axios = require('axios');

// router.post('/activity',  async (req,res) => {
//     activityPost(req,res)
// });


// const activityPost = async(req, res) => {

    router.post('/activity', async (req, res, next) => {
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
        console.log(newActivity)
        for(let element of countries ){
            let country = await Country.findByPk(element);
            await country.addTouring(newActivity);
        }
        res.json("Actividad creada exitosamente");
    }catch(err){
        next(err)
        // res.json({mensaje: "No se pudo crear la actividad"})
        }
    });
    





router.get('/activity', async (req,res,next) => {
    try {
        const resposeActivity = await getActivity()
        res.status(200).send(resposeActivity)
    } catch (error) {
        next(error)
    }
});

module.exports = router