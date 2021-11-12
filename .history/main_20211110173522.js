var course = {
  name: 'Javascript',
  price: 1000,
  image: 'image-address'
}

var { name, description = 'default description' } = course

console.log(description)