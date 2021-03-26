const Finace = require('../models/financeSchema');

const getFinance = () => {
    return Finace.find()
    .then(response => response)
    .catch(err => err);
}

const postFinance = (requestPayload) => {
    return Finace.create(requestPayload)
    .then(response => response)
    .catch(err => err)
}

const patchFinance = (payloadRequest) => {
    return Finace.find()
    .then(() => Finace.updateOne(payloadRequest))
    .catch(err => err)
}

const deleteFinance = () => {
    return Finace.find()
    .then((response) => Finace.deleteOne(response[0]))
    .catch(err => err)
}


module.exports = {
    getFinance,
    postFinance,
    patchFinance,
    deleteFinance
}