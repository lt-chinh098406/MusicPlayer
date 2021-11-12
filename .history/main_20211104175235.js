var topics = [
  {
    topic: 'Front-end',
    courses: [
      {
        id: 1,
        title: 'HTML, CSS'
      },
      {
        id: 2,
        title: 'JS'
      }
    ]
  },
  {
    topic: 'Back-end',
    courses: [
      {
        id: 1,
        title: 'PHP'
      },
      {
        id: 2,
        title: 'NodeJS'
      }
    ]
  }
]

var newArray = topics.reduce(function(course, topic) {
  return course.concat(topic.courses)
}, [])

var htmls = newArray.map(function(course) {
  return `
    <div>
      <h2>${course.title}</h2>
      <p>ID: ${course.id}</p>
    </div>
  `
})

console.log(htmls.join(''))