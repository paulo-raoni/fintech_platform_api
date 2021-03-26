const financeService = require('../services/financeService');
const { calculateConsolidatedAmount } = require('../lib/financeUtils');

const getFinanceData = async (req, res) => {
  try {
    const response = await financeService.getFinance();
    const financeData = response[0];
    const consolidatedAmount = calculateConsolidatedAmount(financeData);
    const payloadResponse = {
      checkingAccountAmount: financeData.checkingAccountAmount,
      positions: financeData.positions,
      consolidatedAmount
    };
    res.status(200).send(payloadResponse);
  } catch (error) {
    res.status(400).send(error);
  }
}

const postFinanceData = async (req, res) => {
  try {
    const requestPayload = req.body;
    const hasFinanca = await financeService.getFinance();

    if(hasFinanca.length)
      throw new Error("Já tem financa criada");
      
    const payloadResponse = await financeService.postFinance(requestPayload);

    res.status(201).send(payloadResponse);
    
  } catch (error) {
    res.status(400).send({error: error.message || error});
  }
}

const patchFinanceData = async (req, res) => {
  try {
    const requestPayload = req.body;
    await financeService.patchFinance(requestPayload);
    res.status(200).send({response: "Dados atualizados!"});
  } catch (error) {
    res.status(400).send({error});
  } 
};

const deleteFinanceData = async (req, res) => {
  try {
    await financeService.deleteFinance();
    res.status(200).send({response: "Dados deletados!"});
  } catch (error) {
    res.status(400).send({error});
  }
};

module.exports = { 
  getFinanceData,
  postFinanceData,
  patchFinanceData,
  deleteFinanceData
}