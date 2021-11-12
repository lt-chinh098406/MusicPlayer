function writeLog() {
  var myString = ''
  for (var param of arguments) {
    myString += `${param} + - `
  }
  console.log(myString)
}

writeLog('Log 1', 'Log 2', 'Log 3')