var listCoursesBlock = document.querySelector('#list-courses')

var coursesApi = 'http://localhost:3000/courses'

function start() {
  getCourses(function(courses) {
    renderCourses(courses)
  })

}

start() // chạy ứng dụng

// function
function getCourses(callback) {
  fetch(coursesApi)
    .then(function(response) {
      return response.json()
    })
    .then(callback)
}

function renderCourses() {

}