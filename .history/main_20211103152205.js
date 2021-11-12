function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
}

var author = new User('Sơn', 'Đặng', 'Avatar');
var user = new User('Chính', 'Lê', 'Avatar');

console.log(author.constructor)
console.log(user)