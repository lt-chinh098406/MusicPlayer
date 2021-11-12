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

var newCourses = courses.map(function(course, index) {
  return course.name = `Khoa hoc: ${course.name}`, course.coinText = `Gia: ${course.coin}`
})

console.log(newCourses)