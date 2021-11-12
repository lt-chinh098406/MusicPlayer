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
  var output = true;

  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index])
      if (!result) {
        output = false;
        break
      }
    }
  }
}

var newSome = courses.every2(function(course) {
  return course.coin > 500
})

console.log(newSome)
