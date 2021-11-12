function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
}

var author = new User('Sơn', 'Đặng', 'avatar')
var user = new User('Chính', 'Lê', 'avatar')

author.tittle = 'Cádasdasdas'
user.comment = 'qrwrqwrq'

console.log(author)
console.log(user)