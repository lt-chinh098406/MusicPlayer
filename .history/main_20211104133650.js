function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
}

var author = new User('Son', 'Dang', 'avatar')
var user = new User('Chinh', 'Le', 'avatar')

console.log(author)
console.log(user)