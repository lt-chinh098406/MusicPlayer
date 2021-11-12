Array.prototype.testMethod = 1
Array.prototype.testMethod2 = function() {

}

Array.prototype.forEach2 = function(callback) {
  for ( var index in this) {
    console.log('index: ', index)
  }
}

var courses = [
  'JS',
  'PHP',
  'Ruby'
]

console.log(courses)

courses.forEach2(function(course, index, array) {
  console.log(course, index, array)
})