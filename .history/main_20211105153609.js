Array.prototype.forEach2 = function(callback) {
  for ( var index in this) {
    callback(this[index])
  }
}

var courses = [
  'JS',
  'PHP',
  'Ruby'
]

var course = courses.forEach2(function(course) {
  console.log(course)
})