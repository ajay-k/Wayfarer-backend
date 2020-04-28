const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.get('/all', ctrl.city.view)
router.get('/cityShow/:id', ctrl.city.cityShow)
router.post('/cityShow/:id', ctrl.city.addPost)
// router.post('/cityShow/:userId/city/:cityId', ctrl.city.addPost)

module.exports = router