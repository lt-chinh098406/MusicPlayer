var listCoursesBlock = document.querySelector('#list-courses')

var courseApi = 'http://localhost:3000/courses'

function start() {
  getCourses(function(courses) {
    console.log(courses)
  })
}

start()

// functions
function getCourses(callback) {
  fetch(courseApi)
    .then(function(response) {
      return response.json()
    })
    .then(callback)
}
