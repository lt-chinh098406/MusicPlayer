var promise = new Promise(
  function(resolve, reject) {
    resolve()
  }
)

promise
  .then(function() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        console.log(1)
      }, 1000)
    })
  })
  .then(function(data) {
    console.log(data)
    return new Promise(function(resolve) {
      setTimeout(function() {
        console.log(2)
      }, 1000)
    })
  })
  .then(function(data) {
    console.log(data)
    return new Promise(function(resolve) {
      setTimeout(function() {
        console.log(3)
      }, 1000)
    })
  })
  .then(function(data) {
    console.log(data)
  })
  .catch(function(error) {
    console.log(error)
  })