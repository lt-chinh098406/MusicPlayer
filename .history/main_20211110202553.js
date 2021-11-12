function highlight([first, ...strings], ...values) {
  return values.reduce(
    (acc, curr) => [...acc, `<span>$${curr}</span>`, strings.shift()]
  , [first])
}

var brand = 'F8'
var course = 'Javascript'

var htmls =  highlight`Học lập trình ${course} tại ${brand}!`

var headingElement = document.querySelector('#heading')

headingElement.innerHTML =htmls.join('')