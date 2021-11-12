function writeLog() {
  var myString = ''
  for (var param of arguments) {
    myString += `${param} - `
  }
};

writeLog(null, undefined, NaN)