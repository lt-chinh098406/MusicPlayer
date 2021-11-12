var promise = new Promise(
  function(resolve, reject) {
    resolve('có lỗi')
  }
)

promise
  // .then(function(courses) {
  // console.log(courses)
  // })
  .catch(function(error) {
  console.log(error)
  })