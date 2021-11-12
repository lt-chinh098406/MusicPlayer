var promise1 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve([1])
  }, 2000)
})

var promise2 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve([2, 3])
  }, 5000)
})

Promise.all([promise1, promise2])
  .then(function(result) {
    console.log(result[0].concat(result[1]))
  })