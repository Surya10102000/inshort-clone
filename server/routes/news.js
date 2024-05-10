const express = require('express')
const getNews = require('../controllers/getNews')

const router = express.Router()

router.get('/read', getNews)

module.exports = router