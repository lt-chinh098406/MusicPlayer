Array.prototype.filter2 = function(callback) {
  var output = []

  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index])
      if (result)
    }
  }
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