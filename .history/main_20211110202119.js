function highlight([first, ...strings], ...values) {
  return values.reduce(
    (acc, curr) => [],
  , [first])
}

var brand = 'F8'
var course = 'Javascript'

var htmls =  highlight`Học lập trình ${course} tại ${brand}!`