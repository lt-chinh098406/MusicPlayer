const numbers = [1, 2, 3, 4, 5]

var result = numbers.reduce((total, number) => {
  return total + number
})

console.log(result)