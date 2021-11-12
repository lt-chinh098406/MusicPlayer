function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function() {
    return `${this.firstName} ${this.lastName}`
  }
}

var author = new User('Son', 'Dang', 'avatar')
var user = new User('Chinh', 'Le', 'avatar')

author.title = 'Hoc JS tai F8'
user.comment = '<3'

ath.prototype.class = 'F8'

console.log(author)
console.log(user)