function writeLog() {
  for (var param of arguments) {
    console.log(param)
  }
}

writeLog('Log 1', 'Log 2', 'Log 3')