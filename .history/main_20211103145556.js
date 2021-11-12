var emailKey = 'email'

var myInfo = {
  name: 'Le Trung Chinh',
  age: 22,
  address: 'Hue, Viet Nam',
  [emailKey]: 'trungchinh211199@gmail.com',
  getName: function() {
    return this.name;
  }
};

console.log(myInfo.getName())