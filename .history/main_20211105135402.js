Array.prototype.map2 = function() {

}

var courses = [
  'JS',
  'PHP',
  'Ruby'
]

var htmls = courses.map2(function(course) {
    return `<h2>${course}</h2>`
})

// var htmls = courses.map(function(course) {
//   return `<h2>${course}</h2>`
// })

// console.log(htmls.join(''))

