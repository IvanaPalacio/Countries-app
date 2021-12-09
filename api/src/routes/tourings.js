// const { Router } = require('express')
// const router = Router()
const {getActivity} = require('../controllers/getDatabase.js')
const express = require('express');
const router = express.Router();
const {Country, Touring, country_touring} = require('../db');
// const {getDatabase, countryAllName, countryIdentifier} = require('../controllers/getDatabase.js');
const axios = require('axios');
const { Op } = require("sequelize");
// router.post('/activity',  async (req,res) => {
//     activityPost(req,res)
// });

// const activityPost = async(req, res) => {
    // const postActivity
router.post('/', async (req,res) => {
        try {
          const { name, difficulty, duration, season, countries } =
            req.body;
        console.log(countries)
          if (
            !name ||
            name.length > 30 ||
            !difficulty ||
            Number.parseInt(difficulty) > 5 ||
            Number.parseInt(difficulty) <= 0
            ) {
            res.status(400).send("Valores incorrectos o incompletos");
            return;
          }
          let activity = await Touring.findOne({
            where: { name },
          
          });
      
          if (!activity) {
            activity = await Touring.create({
              name,
              difficulty,
              duration,
              season
            });
          }
      
          const countriesDb = await Country.findAll({
            where: { name: {
                [Op.or]: countries
              }
            },
          });
      
          activity.addCountries(countriesDb);
      console.log(countriesDb)
          return res.status(200).send("Activity created");
        } catch (e) {
          console.error(e);
          return res.status(404).json({ message: "Creation Failed" });
        }
    })
      
    



router.get('/', async (req,res,next) => {
    try {
        const resposeActivity = await getActivity()
        res.status(200).send(resposeActivity)
    } catch (error) {
        next(error)
    }
});

module.exports = router