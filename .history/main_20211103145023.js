var emailKey = 'email'

var myInfo = {
  name: 'Le Trung Chinh',
  age: 22,
  address: 'Hue, Viet Nam',
  [emailKey]: 'trungchinh211199@mgail.com'
};

delete myInfo.name

console.log(myInfo)