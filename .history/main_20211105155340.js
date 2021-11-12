Array.prototype.forEach2 = function(callback) {
  for ( var index in this) {
    if (his.hasOwnProperty(index)) {
      callback(this[index], index, this)
    }
  }
}

var courses = [
  'JS',
  'PHP',
  'Ruby'
]

courses.forEach2(function(course, index, array) {
  console.log(course, index, array)
})