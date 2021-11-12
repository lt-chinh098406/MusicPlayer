var anArray = [
  1,
  2,
  3,
  4
]

if (anArray.length < 3) {
  anArray = anArray.shift()
} else if (anArray.length > 2)  {
  anArray = anArray.pop(2)
}

console.log(anArray)
