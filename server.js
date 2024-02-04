const express = require('express')
require('dotenv').config()
const cors = require('cors')
const db = require('./config/db')
const app = express()

const port = process.env.PORT

const sponsorRouter = require('./routes/SponsorRoute')

app.use(cors())
app.use(express.json())
app.use(sponsorRouter)

global.APP_NAME = 'ClockSystem';

app.listen(port, () => {
    console.log('La aplicación está funcionando...')
})

db.connect()