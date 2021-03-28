const Position = require('../models/positionSchema');

const getPositionsService = (id) => {
    return Position.findOne({owner: id})
    .populate('owner')
    .then(response => response)
    .catch(err => err);
}

const postPositionsService = (requestPayload) => {
    return Position.create(requestPayload)
    .then(response => response)
    .catch(err => err)
}



module.exports = {
    getPositionsService,
    postPositionsService
}