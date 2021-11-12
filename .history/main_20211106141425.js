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
var htmls = courses.map(function(course) {
  return `
  <p>Hoc ${course.name} tai F8 voi ${course.coin} Coins</p>
  `
})

console.log(htmls.join(''))
