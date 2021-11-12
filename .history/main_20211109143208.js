var promise1 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve([1])
  }, 2000)
})

var promise2 = Promise.reject('Có lỗi')

Promise.all([promise1, promise2])
  .then(function(result) {
    console.log(result[0].concat(result[1]))
  })
  .catch(function(e) {
    console.log(e)
  })