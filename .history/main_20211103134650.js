function writeLog() {
  var myString = ''
  for (var param of arguments) {
    myString += `${param} + - `
  }
}

writeLog('Log 1', 'Log 2', 'Log 3')