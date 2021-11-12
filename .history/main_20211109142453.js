var promise1 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve([1])
  }, 2000)
})

var promise3 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve([2, 3])
  }, 5000)
})
