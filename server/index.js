
const express = require('express')
const connectDB = require('./database/db')
require('dotenv').config()
const cron = require('node-cron')
const storeNews = require('./controllers/storeNews')
const cors = require('cors')


const app = express()
const port = process.env.PORT || 8080
const newsRoute = require('./routes/news')

const connectionString = process.env.MONGO_URI

// route middleware
app.use('/', newsRoute )

connectDB(connectionString)

cron.schedule('*/10 * * * *', storeNews)

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
