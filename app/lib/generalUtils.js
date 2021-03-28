
const calculateConsolidatedAmount = (walletData) => {
    const {checkingAccountAmount, positions} = walletData;
    let consolidatedAmount = checkingAccountAmount;

    for (const p of positions) {
        consolidatedAmount += (p.currentPrice * p.amount);
    }

    return consolidatedAmount;
}


module.exports = {
    calculateConsolidatedAmount
}