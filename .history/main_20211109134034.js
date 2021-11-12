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
    setTimeout(function() {
      console.log(1)
    }, 1000)
  })
  .then(function() {
    console.log(2)
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