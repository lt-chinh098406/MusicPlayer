var promise = new Promise(function(resolve, reject) {
  resolve('Success!')
})

promise
  .then(function(result) {
    console.log(result)
  })