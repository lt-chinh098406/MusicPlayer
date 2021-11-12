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

function courseHandler(course) {
  console.log(course)
}

var newCourses = courses.map(function(courseHandler) {
  return courseHandler.name = `Khoa hoc: ${courseHandler.name}`, courseHandler.coinText = `Gia: ${courseHandler.coin}`
})

console.log(newCourses)