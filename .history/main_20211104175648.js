const numbers = [1, 2, 3, 4, 5]

var total = numbers.reduce(function(total, number) {
  return total + number
}, 0)

console.log(total)