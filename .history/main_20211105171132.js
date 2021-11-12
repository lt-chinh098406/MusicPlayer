Array.prototype.filter2 = function(callback) {
  var output = []

  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, array)
    }
  }

  return output
}

var courses = [
  {
    name: 'JS',
    coin: 680
  },
  {
    name: 'PHP',
    coin: 860
  },
  {
    name: 'Ruby',
    coin: 980
  }
]

var newFilter = courses.filter2(function(course) {
  console.log(course, index, courses)
  return course.coin > 700
})

console.log(newFilter)