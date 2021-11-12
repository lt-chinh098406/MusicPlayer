var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

for (var i = 0; i < depthArray.length; i++) {
  console.log(depthArray[i][j])
  for (var j = 0; j < depthArray[i].length; j++) {
    console.log(depthArray[i][j])
  }
}