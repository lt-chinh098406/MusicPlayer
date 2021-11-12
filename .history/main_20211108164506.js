var promise = new Promise(
  // Excutor
  function(resolve, reject) {
    // Logic
    // Thành công: resolve()
    resolve()
    // Thất bại: reject()
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