Array.prototype.filter2 = function(callback) {
  for (var index in this) {
    var result = callback(this[index].coin > 700)
  }

  return result
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
  return course.coin > 700
})

console.log(newFilter)