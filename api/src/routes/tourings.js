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


router.get('/activity', async (req,res,next) => {
    try {
        const resposeActivity = await getActivity()
        res.status(200).send(resposeActivity)
    } catch (error) {
        next(error)
    }
});

module.exports = router