Array.prototype.map2 = function(callback) {

}


var courses = [
  'JS',
  'PHP',
  'Ruby'
]

var htmls = courses.map2(function(course) {
  return `<h2>${course}</h2>`
})

// console.log(htmls.join(''))

