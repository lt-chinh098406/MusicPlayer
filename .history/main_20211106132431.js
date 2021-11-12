// Ví dụ, giảng viên và học viên thì đều là User giống nhau đều có firstName, lastName, avatar, khác nhau : giảng viên thì có tittle, còn học viên có comment
function User(firstName, lastName, avatar) {
  this.firstName = firstName
  this.lastName = lastName
  this.avatar = avatar
}

var admin = new User('Son', 'Dang', 'avatar')
var user = new User('Chinh', 'Le', 'avatar')

console.log(admin)
console.log(user)