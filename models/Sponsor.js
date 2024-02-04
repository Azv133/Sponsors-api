const createModel = require("../data_base/createModel");

const Sponsor = createModel('Sponsor', [
    'id',
    'logo',
    'title',
    'company',
    'location',
    'status',
    'description',
    'modality',
    'link',
]);

module.exports = Sponsor;