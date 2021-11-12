var courses = [
  {
    id: 1,
    name: 'JS',
    coin: 250
  },
  {
    id: 2,
    name: 'HTML, CSS',
    coin: 0
  },
  {
    id: 3,
    name: 'Ruby',
    coin: 0
  },
  {
    id: 4,
    name: 'PHP',
    coin: 400
  },
  {
    id: 5,
    name: 'ReactJS',
    coin: 500
  }
]

// 6. map() - eidt, thay doi elemnt cua arrray - render html len web
Array.prototype.map2 = function(callback) {
  var output = []

  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index])
      output.push(result)
    }
  }

  return output
  console.log(output)
}


var htmls = courses.map2(function(course) {
  return `
  <p>Học ${course.name} tại F8 với ${course.coin} Coins</p>
  `
})

console.log(htmls.join(''))
