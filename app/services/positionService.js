const Position = require("../models/positionSchema");
const { POSITION_TRENDS } = require("../lib/constants");

const getPositionsService = (id) => {
  return Position.findOne({ owner: id })
    .populate("owner")
    .then((response) => response)
    .catch((err) => err);
};

const postOrderService = (requestPayload) => {
  return Position.create(requestPayload)
    .then((response) => response)
    .catch((err) => err);
};

const getTrends = () => {
  return POSITION_TRENDS;
};

module.exports = {
  getPositionsService,
  postOrderService,
  getTrends
};
