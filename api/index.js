//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___o
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Country } = require('./src/db');
const axios = require('axios');
const { FORCE, PORT } = process.env
const force = JSON.parse(FORCE)
const {getDatabase} = require('./src/controllers/getDatabase')

// Syncing all the models at once.
conn.sync({ force })
  .then(() => force ? getDatabase() : null)
  .then(() => {
    server.listen(3001, () => {
      console.log(`Server listening at port ${3001}`); // eslint-disable-line no-console
    })
  })
  .catch((err) => console.error(err))
