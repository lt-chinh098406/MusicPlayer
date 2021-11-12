var anArray = [
  1,
  2,
  3,
  4
]

// if (anArray.length < 3) {
//   anArray = anArray.split(anArray.shift())
// } else if (anArray.length > 2)  {
//   anArray = anArray.split(anArray.pop(2))
// }
anArray = anArray.split(anArray.shift())
console.log(anArray)
