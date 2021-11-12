var promise = new Promise(
  //excutor
  function(resolve, reject) {
    //Logic
    // Thanh cong => Resolve
    resolve([
      {
        id: 1,
        name: 'JS'
      },
      {
        id: 2,
        name: 'PHP'
      }
    ])
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