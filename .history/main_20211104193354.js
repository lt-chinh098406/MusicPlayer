function myFunction(param) {
  param(123)
}

function myCallBack(value) {
  console.log('Value: ', value)
}

myFunction(myCallBack)