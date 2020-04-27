const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.get('/all', ctrl.city.view)
router.get('/cityShow/:id', ctrl.city.cityShow)

module.exports = router