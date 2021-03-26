
const calculateConsolidatedAmount = (financeData) => {
    const {checkingAccountAmount, positions} = financeData;
    let consolidatedAmount = checkingAccountAmount;

    for (const p of positions) {
        consolidatedAmount += (p.currentPrice * p.amount);
    }

    return consolidatedAmount;
}


module.exports = {
    calculateConsolidatedAmount
}