function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function() {
    return `${this.firstName} ${this.lastName}`
  }
}

User.prototype.classname = 'F8'

var author = new User('Sơn', 'Đặng', 'avatar')
var user = new User('Chính', 'Lê', 'avatar')

console.log(author.getName())
console.log(user)