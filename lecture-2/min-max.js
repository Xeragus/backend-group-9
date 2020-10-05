const candles = [4, 3, 4, 5, 6, 7]

// how to find maximum value
let highestCandle = 0
candles.forEach(candle => {
  if (candle > highestCandle) highestCandle = candle
})
console.log(highestCandle)
// iteracija 1
// candle = 4
// dali 4 > 0, da pogolemo e znaci highestCandle sega kje ima vrednost 4
// iteracija 2
// candle 3
// 3 > 4
// iteracija 3
// candle 4
// 4 > 4
// iteracija 4
// 5 > 4, znaci highestCandle = 5
// iteracija 5
// 6 > 5, znaci highestCandle = 6
// highestCandle = 7

// how to find minimum value
let lowestCandle = 100
candles.forEach(candle => {
  if (candle < lowestCandle) lowestCandle = candle
})