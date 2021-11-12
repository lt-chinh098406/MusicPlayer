var coursesApi = 'http://localhost:3000/courses'

function start() {
  getCourses(function(courses) {
    console.log(courses)
  })
}

start()

//functions
function getCourses(callback) {
  fetch(coursesApi)
    .then(function(response) {
      return response.json()
    })
    .then(callback)
}