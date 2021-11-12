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
    return 2
  })
  .then(function(data) {
    console.log(data)
    return 3
  })
  .then(function(data) {
    console.log(data)
  })
  .catch(function(error) {
    console.log(error)
  })
  .finally(function() {
    console.log('Done!')
  })