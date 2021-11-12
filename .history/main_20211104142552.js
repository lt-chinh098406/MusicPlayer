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

courses.every(function(course, index) {
  console.log(index, course)
})