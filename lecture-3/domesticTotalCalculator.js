// let calculatedDomesticTotal2 = 0
// receipts.forEach(receipt => {
//   calculatedDomesticTotal2 = calculatedDomesticTotal2 + receipt.domesticTotal
// })

// console.log('Prometot od domasni proizvodi iznesuva: ', calculatedDomesticTotal)
// console.log('Prometot od domasni proizvodi iznesuva: ', calculatedDomesticTotal2)

function calculateDomesticTotal(receipts) {
  const calculatedDomesticTotal = receipts.reduce((currentTotal, receipt) => {
    return currentTotal + receipt.domesticTotal
  }, 0)

  return calculatedDomesticTotal
}

module.exports = {
  calculateDomesticTotal: calculateDomesticTotal
}