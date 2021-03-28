const positionService = require("../services/positionService");
const userService = require("../services/userService");
const mongoose = require("mongoose");

const { calculateConsolidatedAmount } = require("../lib/generalUtils");

const getPositions = async (req, res) => {
  try {
    const params = req.params;
    if (!params) throw new Error("Params is empty.");

    const userId = mongoose.Types.ObjectId(params.id);

    const userResponse = await userService.getUser(userId);
    const positionsResponse = await positionService.getPositionsService(userId);
    const { positions } = positionsResponse;
    const { checkingAccountAmount } = userResponse;

    const consolidatedAmount = calculateConsolidatedAmount({
      positions,
      checkingAccountAmount,
    });

    const payloadResponse = {
      checkingAccountAmount,
      positions,
      consolidatedAmount,
    };

    res.status(200).send(payloadResponse);
  } catch (error) {
    res.status(400).send(error);
  }
};

const postPositions = async (req, res) => {
  try {
    if (!req.body) throw new Error("Body is empty!");
    const body = req.body;
    const id = mongoose.Types.ObjectId(body.id);
    const user = await userService.getUser(id);

    if (!user.username) throw new Error("User does not exist!");

    const payloadResponse = await positionService.postPositionsService({
      owner: body.id,
      positions: body.positions,
    });

    res.status(201).send(payloadResponse);
  } catch (error) {
    res.status(400).send({ error: error.message || error });
  }
};

module.exports = {
  getPositions,
  postPositions,
};
