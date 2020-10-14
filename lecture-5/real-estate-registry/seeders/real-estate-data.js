const faker = require('faker')

const data = []

for(let i = 0; i < 100; i++) {
  data.push({
    id: faker.random.uuid(),
    address: `${faker.address.streetAddress()}, ${faker.address.country()}`,
    area: faker.random.number(),
    owner: `${faker.name.firstName()} ${faker.name.lastName()}`,
    privatizedOn: faker.date.past()
  })
}

module.exports = data