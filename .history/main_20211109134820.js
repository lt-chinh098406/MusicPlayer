var promise = new Promise(
  function(resolve, reject) {
    resolve()
  }
)

promise
  .then(function() {
  })
  .then(function(data) {
    console.log(data)
  })
  .catch(function(error) {
    console.log(error)
  })