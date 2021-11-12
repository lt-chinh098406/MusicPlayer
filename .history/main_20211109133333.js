var promise = new Promise(
  //excutor
  function(resolve, reject) {
    //Logic
    // Thanh cong => Resolve
    // that bai => Reject
    reject('có lỗi')
  }
)

promise
  .then(function(courses) {
    console.log(courses)
  })
  .catch(function(error) {
    console.log(error)
  })
  .finally(function() {
    console.log('Done!')
  })