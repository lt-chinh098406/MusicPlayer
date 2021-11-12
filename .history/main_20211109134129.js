var promise = new Promise(
  //excutor
  function(resolve, reject) {
    //Logic
    // Thanh cong => Resolve
    // that bai => Reject
    resolve()
  }
)

promise
  .then(function() {
    return 1
  })
  .then(function(data) {
    console.log(data)
  })
  .then(function() {
    console.log(3)
  })
  .catch(function(error) {
    console.log(error)
  })
  .finally(function() {
    console.log('Done!')
  })