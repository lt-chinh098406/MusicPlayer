var coursesApi = 'http://localhost:3000/courses'

function start() {
  getCourses(renderCourses)

  handleCreateForm()
}

start() // chạy ứng dụng

// function
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

function handleDeleteCourse(id) {
  var option = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch(coursesApi + '/' + id, option)
    .then(function(response) {
      return response.json()
    })
    .then(function() {
      var courseItem = document.querySelector('.course-item-' + id)
      if (courseItem) {
        courseItem.remove()
      }
    })
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
      <li class="course-item-${course.id}">
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
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

    var formDate = {
      name: name,
      description: description
    }

    createCourse(formDate, function() {
      getCourses(renderCourses)
    })
  }
}