function highlight([first, ...strings], ...values) {
  return htmls.reduce(function() {
    for (var i in values) {
      var b = values[i]
      for (var j in values) {
        var c =  values[j]
      }
    }
    a + b + c
  }, first)
}

var brand = 'F8'
var course = 'Javascript'

var htmls =  highlight`Học lập trình ${course} tại ${brand}!`