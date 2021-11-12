
var title = 'Javascript cơ bản'
var description = 'Học Javascript cơ bản tại F8'

if (title.slice(title.indexOf('Javascript'), title.indexOf(' c')) == 'Javascript' && description.slice(description.indexOf('Javascript'), description.indexOf(' c')) == 'Javascript') {
  result = true;
} else {
  result = false
}

console.log(result)

console.log(title.indexOf('Javascript'))

console.log(description.slice(description.indexOf('Javascript'), description.indexOf(' c')))