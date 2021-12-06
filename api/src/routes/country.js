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
        res.status(200).json(particularDetail)
    }catch (error) {
        next(error)
    }
});

//get Country





//get country
// const { name } = req.query;

// try {
//   const countriesDb = await getFromDb();

//   if (!name) {
//     return res.send(countriesDb);
//   } else {
//     const nameGood =
//       name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

//     const nameMatch = await Country.findAll({
//       //cambiar por findOne
//       where: {
//         name: {
//           [Op.like]: `%${nameGood}%`,
//         },
//       },
//       include: {
//         model: Activity,
//         attributes: [
//           "name",
//           "difficulty",
//           "duration",
//           "season",
//         ],
//         through: { attributes: [] },
//       },
//     });
//     nameMatch.length === 0
//       ? res
//           .status(404)
//           .send("We're sorry, no matches were found for your search")
//       : res.status(200).send(nameMatch);
//   }
// } catch (e) {
//   console.log(e);
// }
// };

module.exports = router;