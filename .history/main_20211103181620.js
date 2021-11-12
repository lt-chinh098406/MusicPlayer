var myInfo = {
  name: 'Bin',
  age: 22
}

myInfo =  Object.values(myInfo)

for (var value of myInfo) {
  console.log(value)
}