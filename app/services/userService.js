const User = require('../models/userSchema');

const getUser = (id) => {
    return User.findOne(id)
    .then(response => response)
    .catch(err => err);
}

const postUser = (requestPayload) => {
    return User.create(requestPayload)
    .then(response => response)
    .catch(err => err)
}

const addAccountAmount = (requestPayload) => {
    const {id, checkingAccountAmount} = requestPayload;
    return User.findOne({id})
    .then(() => User.updateOne({checkingAccountAmount}))
    .catch(err => err)
}

const patchUser = (payloadRequest) => {
    return User.findOne(payloadRequest)
    .then((user) => User.updateOne(user))
    .catch(err => err)
}

const deleteUser = () => {
    return User.findOne()
    .then((user) => User.deleteOne(user[0]))
    .catch(err => err)
}


module.exports = {
    getUser,
    addAccountAmount,
    postUser,
    patchUser,
    deleteUser
}