const faker = require('faker')
const moment = require('moment')

const data = []

for(let i = 0; i < 15; i++) {
  data.push({
    id: faker.random.uuid().slice(0, 18),
    address: `${faker.address.streetAddress()}, ${faker.address.country()}`,
    area: faker.random.number(),
    owner: `${faker.name.firstName()} ${faker.name.lastName()}`,
    privatizedOn: moment(faker.date.past()).format('MMMM Do YYYY')
  })
}

console.log(data[0].privatizedOn)

module.exports = data
