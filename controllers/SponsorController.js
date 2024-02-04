const Sponsor = require('../models/Sponsor')
const SponsorService = require('../services/SponsorService')

const sponsors = 3;

exports.getSponsors = async(req, res) => {
    const {result, status, message} = await Sponsor.getAll()

    if(status){

        const shuffleSponsors = SponsorService.shuffleArray(result, sponsors)

        res.status(200).json({
            status: true,
            sponsors: shuffleSponsors
        });
    }else{
        res.status(500).json({
            status: false,
            error: message
        });
    }
}