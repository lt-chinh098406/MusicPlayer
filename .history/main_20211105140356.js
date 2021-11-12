Array.prototype.map2 = function(callback) {
  var arrayLength = this.length

  for (var i = 0; i < arrayLength; ++i) {
    var result = callback(this[i])

  }
}

var courses = [
  'JS',
  'PHP',
  'Ruby'
]

var htmls = courses.map2(function(course) {
    return `<h2>${course}</h2>`
})

console.log(htmls)

// var htmls = courses.map(function(course) {
//   return `<h2>${course}</h2>`
// })

// console.log(htmls.join(''))

