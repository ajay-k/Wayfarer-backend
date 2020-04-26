const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

//PATH = /api/v1/user
router.get('/view/:id', ctrl.user.view)
router.put('/update/:id', ctrl.user.update)




module.exports = router