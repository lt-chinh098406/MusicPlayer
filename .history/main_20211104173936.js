var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

var flatArray = []

for (var i = 0; i < depthArray.length; i++) {
  var a = flatArray.concat(depthArray[i])
}
  console.log(flatArray)