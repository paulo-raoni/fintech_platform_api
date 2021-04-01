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

const postOrders = async (req, res) => {
  try {
    if (!req.body) throw new Error("Body is empty!");
    const body = req.body;
    const id = mongoose.Types.ObjectId(body.id);
    const { symbol, amount} = body;
    const user = await userService.getUser(id);    

    if (!user.username) throw new Error("User does not exist!");

    const trends = positionService.getTrends();

    const stock = trends.find((p) => p.symbol === symbol);

    if(stock) {
      console.log(`stock ${stock}`);
      const buyAmount = amount * stock.currentPrice;
      if(user.checkingAccountAmount >= buyAmount) {
        res.status(201).send(stock);
      } else {
        res.status(400).send({msg: "Not enough money!"});
      }
     
    } else {
        console.log(` ${stock}`);
        res.status(400).send({msn: "Stock not found!"});
    }

    
  } catch (error) {
    res.status(400).send({ error: error.message || error });
  }
};

module.exports = {
  getPositions,
  postOrders,
};
