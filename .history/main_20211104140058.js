var myInfo = {
  name: 'Chinh Le',
  age: 22,
  address: 'Hue, VN'
}

myInfo = Object.values(myInfo)

for (var key of myInfo) {
  console.log(key)
}