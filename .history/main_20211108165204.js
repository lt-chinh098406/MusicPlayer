var promise = new Promise(
  function(resolve, reject) {
    reject('có lỗi')
  }
)

promise
  .then(function(courses) {
  console.log(courses)
  });
  .catch(function(error) {
  console.log(error)
  });
  .finally(function() {
  console.log('Done')
  });