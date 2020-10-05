const domesticTotalCalculator = require('./domesticTotalCalculator') // file-based module
const axios = require('axios')

const receiptsToday = [
  {
    idNumber: 94039430943904343,
    domesticTotal: 65,
    foreignTotal: 333
  },
  {
    idNumber: 94039430943904343,
    domesticTotal: 344,
    foreignTotal: 96
  },
  {
    idNumber: 94039430943904343,
    domesticTotal: 12,
    foreignTotal: 44
  },
  {
    idNumber: 94039430943904343,
    domesticTotal: 77,
    foreignTotal: 23
  }
]

const receiptsYesterday = [
  {
    idNumber: 94039430943904343,
    domesticTotal: 0,
    foreignTotal: 333
  },
  {
    idNumber: 94039430943904343,
    domesticTotal: 2,
    foreignTotal: 96
  },
  {
    idNumber: 94039430943904343,
    domesticTotal: 5,
    foreignTotal: 44
  },
  {
    idNumber: 94039430943904343,
    domesticTotal: 77,
    foreignTotal: 23
  }
]

// console.log(domesticTotalCalculator.calculateDomesticTotal(receiptsToday))
// console.log(domesticTotalCalculator.calculateDomesticTotal(receiptsYesterday))

// ima 3 tipa na moduli
// 1. file-based modules
// 2. core modules
// 3. external modules (NPM - Node Package Manager)

// axios.get('https://randomuser.me/api/?results=10')
//      .then(res => {
//       console.log('uspesno se vrati response', res)
//      })
//      .catch(err => {
//        console.log('se sluci greska', err)
//      })

const numbers = []

