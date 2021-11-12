function myFunction(param) {
  if (typeof param === 'function') {
    param(123)
  }
}

function myCallBack(value) {
  console.log('Value: ', value)
}

myFunction(myCallBack)