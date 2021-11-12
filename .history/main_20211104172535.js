// var courses = [
//   {
//     id: 1,
//     name: 'JS',
//     coin: 250
//   },
//   {
//     id: 2,
//     name: 'HTML, CSS',
//     coin: 0
//   },
//   {
//     id: 3,
//     name: 'Ruby',
//     coin: 0
//   },
//   {
//     id: 4,
//     name: 'PHP',
//     coin: 400
//   },
//   {
//     id: 5,
//     name: 'ReactJS',
//     coin: 500
//   }
// ]

// var totalCoin = courses.reduce(function(total, course) {
//   return total + course.coin
// }, 0)

// console.log(totalCoin)

var numbers = [100, 200, 200, 220, 480]

var totalCoin = numbers.reduce(function(total, number) {
  return total + number
})

console.log(totalCoin)