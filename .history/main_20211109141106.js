function sleep(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms)
  })
}

sleep(1000)
  .then(function() {
    console.log(1)
    return sleep(1000)
  })
  .then(function() {
    console.log(2)
    return new Promise(function(resolve, reject) {
      reject('Co lõi')
    })
  })
  .then(function() {
    console.log(3)
    return sleep(1000)
  })
  .then(function() {
    console.log(4)
  })
  .catch(function(error) {
    console.log(error)
  })