const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

//PATH = /api/v1/user
router.get('/view', ctrl.user.view)
router.put('/update', ctrl.user.update)




module.exports = router