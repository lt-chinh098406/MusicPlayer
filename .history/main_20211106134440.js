var myArray = [
  [1, 2],
  [3, 4],
  [5, 6]
]

for (var i of myArray) {
  for (var j of myArray[i]) {
    console.log(j)
  }
}
