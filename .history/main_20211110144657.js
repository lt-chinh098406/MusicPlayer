var coursesApi = 'http://localhost:3000/courses'

function start() {
  getCourses(renderCourses)

  handleCreateForm()
}

start()

//functions
function createCourse(data, callback) {
  var option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(coursesApi, option)
    .then(function(response) {
      return response.json()
    })
    .then(callback)
}

function createCourse(id) {
  var option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(coursesApi, option)
    .then(function(response) {
      return response.json()
    })
    .then(callback)
}

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
        <button onclick="handleDeleteCourses(${course.id})">Xóa</button>
      </li>
    `
  })
  listCoursesBlock.innerHTML = htmls.join('')
}

function handleCreateForm() {
  var createBtn = document.querySelector('#create')

  createBtn.onclick = function() {
    var name = document.querySelector('input[name="name"]').value
    var description = document.querySelector('input[name="description"]').value

    var dataForm = {
      name: name,
      description: description
    }

    createCourse(dataForm, function() {
      getCourses(renderCourses)
    })
  }
}