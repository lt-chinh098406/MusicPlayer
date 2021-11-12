Array.prototype.forEach2 = function(callback) {
  for ( var index in this) {
    callback('index:, ', index)
  }
}

var courses = [
  'JS',
  'PHP',
  'Ruby'
]

var course = courses.forEach2(function(course, index, arrray) {
  console.log(course, index, arrray)
})