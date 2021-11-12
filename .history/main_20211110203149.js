function highlight([first, ...strings], ...values) {
  return values.reduce(
    (acc, curr) => [acc..., ],
    first
  )
}

var brand = 'F8'
var course = 'Javascript'

var htmls = highlight`Học lập trình ${course} tại ${brand}!`

console.log(htmls)
