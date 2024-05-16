const express = require('express')
const {getNews , getNewsLimited} = require('../controllers/getNews')

const router = express.Router()

// router.get('/read', getNews)
router.get('/read', getNewsLimited )

module.exports = router