var promise = Promise.resolve('Success!')

promise
  .then(function(result) {
    console.log('result: ', result)
  })