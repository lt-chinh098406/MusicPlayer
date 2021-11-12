var courses = [
  {
    name: 'JS',
    coin: 680,
    isFinish: true
  },
  {
    name: 'PHP',
    coin: 860,
    isFinish: false
  },
  {
    name: 'Ruby',
    coin: 980,
    isFinish: false
  }
]

var newSome = courses.some(function(course) {
  return course.isFinish === true
})

console.log(newSome)
