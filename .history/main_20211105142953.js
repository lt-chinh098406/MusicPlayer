// forEach 2
Array.prototype.forEach2 = function(callback) {
  var arrayLength = this.length

  for ( var i = 0; i < arrayLength; ++i) {
    callback(this[i])
  }
}

var courses = [
  'JS',
  'PHP',
  'Ruby'
]


// var course = courses.forEach2(function(course) {
//   console.log(course)
// })

//


