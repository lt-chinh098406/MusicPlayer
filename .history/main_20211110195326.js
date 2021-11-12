var object1 = {
  name: 'JS'
}

var object2 = {
  price: 1000
}

var object3 = {...object1, ...object2}

console.log(object3)