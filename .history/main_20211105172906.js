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

Array.prototype.some2 = function(callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index])
      if (result) {
        true
      }
    }
  }

  return result
}

var newSome = courses.some2(function(course) {
  return course.isFinish === true
})

console.log(newSome)
