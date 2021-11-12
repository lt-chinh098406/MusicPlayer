var promise = new Promise(
  function(resolve, reject) {
    reject('có lỗi')
  }
)

promise.then(function(courses) {
  console.log(courses)
});
promise.catch(function(error) {
  console.log(error)
});
promise.finally(function() {
  console.log('Done')
});