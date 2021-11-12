var promise = new Promise(
  // Excutor
  function(resolve, reject) {
    // Logic
    // Thành công: resolve()
    // Thất bại: reject()
    // resolve()
    reject()
  }
)

promise.then(function() {
  console.log('Successfully')
});
promise.catch(function() {
  console.log('Failure')
});
promise.finally(function() {
  console.log('Done')
});