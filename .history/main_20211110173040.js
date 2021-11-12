var course = {
  name: 'Javascript',
  price: 1000,
  image: 'image-address',
  children: {
    name: 'ReactJS'
  }
}

var { name, children: { name } } = course

console.log(name)