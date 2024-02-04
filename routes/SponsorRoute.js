const express = require('express')

const controller = require('../controllers/SponsorController');

const router = express.Router()

const path = 'sponsor'

router.get(`/${path}`, controller.getSponsors)

module.exports = router