var promise = new Promise(
  function(resolve, reject) {
    resolve([
      {
        id: 1,
        name: 'JavaScript'
      }
    ])
  }
)

promise.then(function(courses) {
  console.log(courses)
});
promise.catch(function() {
  console.log('Failure')
});
promise.finally(function() {
  console.log('Done')
});