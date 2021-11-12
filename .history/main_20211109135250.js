var promise = new Promise(
  function(resolve, reject) {
    resolve()
  }
)

promise
  .then(function() {
    return new Promise(function(resolve) {
      setTimeout(resolve, 3000)
    })
  })
  .then(function(data) {
    console.log(data)
  })
  .catch(function(error) {
    console.log(error)
  })