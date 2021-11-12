var coursesApi = 'http://localhost:3000/courses'

function start() {
  getCourses(renderCourses)

  handleCreateForm()
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

function renderCourses(courses) {
  var listCoursesBlock = document.querySelector('#list-courses')

  var htmls = courses.map(function(course) {
    return `
      <li>
        <h4>${course.name}</h4>
        <p>${course.description}</p>
      </li>
    `
  })
  listCoursesBlock.innerHTML = htmls.join('')
}

function handleCreateForm() {
  var createBtn = document.querySelector('#create')

  createBtn.onclick = function() {
    var name = document.querySelector('input[name="name"]').value
    console.log(name)
  }
}