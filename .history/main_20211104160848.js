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

var totalCoin = courses.map(function(course) {
  return course.coin
})

console.log(totalCoin)

for (var i = 0; i < totalCoin.length; i++) {
  console.log(totalCoin[i])
}
