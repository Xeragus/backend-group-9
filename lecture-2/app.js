const clubs = [
  {
    name: 'Arsenal',
    stadium: 'Emirates',
    capacity: '65000'
  },
  {
    name: 'Barcelona',
    stadium: 'Camp Nou',
    capacity: '95000'
  },
  {
    name: 'Juventus',
    stadium: 'Torino',
    capacity: '35000'
  },
  {
    name: 'Man City',
    stadium: 'Etihad',
    capacity: '95000'
  }
]

// .find(), .map(), .filter(), .forEach()
// const filteredClubs = clubs.filter(club => {
//   return club.stadium != 'Etihad'
// })
const filteredClubs = clubs.find(club => {
  return club.stadium != 'Etihad'
})

// arrow functions in js

const randomName = 'Smile'
console.log(filteredClubs)

// filteredClubs.forEach(club => {
//   // interpolacija na string
//   console.log('Klubot so ime ' + club.name + ' igra na stadionot ' + club.stadium + ' so kapacitet ' + club.capacity)
//   console.log(`Klubot so ime ${club.name} igra na stadionot ${club.stadium} ${randomName} ${5 + 2}`)
// })