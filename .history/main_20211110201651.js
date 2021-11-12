function highlight([first, ...strings], ...values) {
  console.log('first: ', first)
  console.log('strings: ', strings)
  console.log('values: ', values)
}

var brand = 'F8'
var course = 'Javascript'

highlight`Học lập trình ${course} tại ${brand}!`