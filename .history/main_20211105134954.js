Array.prototype.map2 = function(callback) {
  var arrayLength = this.length

  for (var i = 0; i < arrayLength; ++i) {
    console.log(this[i])
  }
}

var courses = [
  'JS',
  'PHP',
  'Ruby'
]

courses.map2(function(course) {
  return `<h2>${course}</h2>`
})

// var htmls = courses.map(function(course) {
//   return `<h2>${course}</h2>`
// })

// console.log(htmls)

