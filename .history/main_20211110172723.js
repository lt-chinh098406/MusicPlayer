var course = {
  name: 'Javascript',
  price: 1000,
  image: 'image-address'
}

var { name, ...newCourse } = course

console.log(newCourse)