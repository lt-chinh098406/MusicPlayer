var course = {
  name: 'Javascript',
  price: 1000,
  image: 'image-address',
  children: {
    name: 'ReactJS'
  }
}

var { name: parentName, children: { name: childrenName } } = course

console.log(parentName)
console.log(childrenName)
console.log(name)