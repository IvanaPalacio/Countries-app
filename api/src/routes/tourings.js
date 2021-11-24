const { Router } = require('express')
const router = Router()

router.get('/activity', (req, res, next) => {
    res.send('soy get/touring')
})

router.post('/activity', (req, res, next) => {
    res.send('soy post/touring')
})

router.put('/activity', (req, res, next) => {
    res.send('soy put/touring')
})

router.delete('/activity', (req, res, next) => {
    res.send('soy delete/touring')
})


module.exports = router