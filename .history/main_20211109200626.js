var listCoursesBlock = document.querySelector('#list-courses')

var courseApi = 'http://localhost:3000/courses'

function start() {
  getCourses();
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
