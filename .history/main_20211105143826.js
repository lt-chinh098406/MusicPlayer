// forEach 2
// Array.prototype.forEach2 = function(callback) {
//   var arrayLength = this.length

//   for ( var i = 0; i < arrayLength; ++i) {
//     callback(this[i])
//   }
// }

// var courses = [
//   'JS',
//   'PHP',
//   'Ruby'
// ]

// var course = courses.forEach2(function(course) {
//   console.log(course)
// })

//every2 == some
// Array.prototype.every2 = function(callback) {
//   var arrayLength = this.length

//   for ( var i = 0; i < arrayLength; ++i) {
//     var result = callback(this.coin === 0)
//   }

//   return result
// }

var courses = [
  {
    id: 1,
    name: 'JS',
    coin: 250
  },
  {
    id: 2,
    name: 'HTML, CSS',
    coin: 0
  },
  {
    id: 3,
    name: 'Ruby',
    coin: 0
  },
  {
    id: 4,
    name: 'PHP',
    coin: 400
  },
  {
    id: 5,
    name: 'ReactJS',
    coin: 500
  }
]

// var isFree = courses.every2(function(course) {
//   return course.coin === 0
// })
// console.log(isFree)


//reduce
var totalCoin = courses.every2(function(total, course) {
  return total + course
}, 0)
console.log(totalCoin)
