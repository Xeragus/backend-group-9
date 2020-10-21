const faker = require('faker')
const moment = require('moment')

const people = []

for(let i = 0; i < 15; i++) {
  people.push({
    id: i+1,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.streetAddress()}, ${faker.address.country()}`,
    dateOfBirth: moment(faker.date.past()).format('MMMM Do YYYY')
  })
}

module.exports = people
