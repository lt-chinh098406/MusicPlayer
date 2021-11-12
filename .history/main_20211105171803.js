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

Array.prototype.filter2 = function(callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index])
    }
  }
}

var newFilter = courses.filter2(function(course) {
  // return course.coin > 700
  console.log(course)
})

console.log(newFilter)
