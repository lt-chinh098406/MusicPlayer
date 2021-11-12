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

var newCourse = topics.reduce(function(course, topic) {
  return course.concat(topic.courses)
}, [])

console.log(newCourse)