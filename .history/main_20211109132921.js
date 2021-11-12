var promise = new Promise(
  //excutor
  function(resolve, reject) {
    //Logic
    // Thanh cong => Resolve
    // that bai => Reject
  }
)

promise
  .then(function() {
    console.log('SuccessfullY!')
  })
  .catch(function() {
    console.log('Failure!')
  })
  .finally(function() {
    console.log('Done!')
  })