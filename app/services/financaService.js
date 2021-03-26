const Financa = require('../models/financaSchema');

const getFinancas = () => {
    return Financa.find()
    .then(response => response)
    .catch(err => err);
}

const postFinanca = (requestPayload) => {
    return Financa.create(requestPayload)
    .then(response => response)
    .catch(err => err)
}

const patchFinanca = (payloadRequest) => {
    return Financa.find()
    .then(() => Financa.updateOne(payloadRequest))
    .catch(err => err)
}

const deleteFinanca = () => {
    return Financa.find()
    .then((response) => Financa.deleteOne(response[0]))
    .catch(err => err)
}


module.exports = {
    getFinancas,
    postFinanca,
    patchFinanca,
    deleteFinanca
}