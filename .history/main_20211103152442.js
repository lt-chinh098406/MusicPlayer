function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
}

var author = new User('Sơn', 'Đặng', 'Avatar');
var user = new User('Chính', 'Lê', 'Avatar');

author.title = 'Chia sẻ dạo tại F8'
user.comment = 'Liệu có khóa asp.net k ad'

console.log(author)
console.log(user)