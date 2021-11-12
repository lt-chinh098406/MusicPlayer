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

Array.prototype.every2 = function(callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      if (callback(this[index]) === false) {
        return false
      }
    }
  }
  return true
}

var newSome = courses.every2(function(course) {
  return course.isFinish === true
})

console.log(newSome)
