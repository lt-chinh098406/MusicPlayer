function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function() {
    return `${this.firstName} + ${this.lastName}`
  }
}

var author = new User('Sơn', 'Đặng', 'avatar')
var user = new User('Chính', 'Lê', 'avatar')

console.log(author)
console.log(user)