
var title = 'Javascript cơ bản'
var description = 'Học Javascript cơ bản tại F8'

if (title.slice(title.indexOf('Javascript'), title.indexOf(' c')) == 'Javascript' && description.slice(description.indexOf('Javascript'), description.indexOf(' c')) == 'Javascript') {
  result = true;
} else {
  result = false
}

var a = 'HI'
var b = 'hi'

function run(a, b) {
  console.log(a.toLowerCase());
  console.log(b.toUpperCase());
  return a + '|' + b;
}