Array.prototype.filter2 = function(callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this)
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

var newFilter = courses.filter2(function(course, index, courses) {
  console.log(course, index, courses)
  return course.coin > 700
})

console.log(newFilter)