// Ví dụ, giảng viên và học viên thì đều là User giống nhau đều có firstName, lastName, avatar, khác nhau : giảng viên thì có tittle, còn học viên có comment
function User(firstName, lastName, avatar) {
  this.firstName = firstName
  this.lastName = lastName
  this.avatar = avatar

  this.getName = function (){
    return `${firstName} ${lastName}`
  }
}

var admin = new User('Son', 'Dang', 'avatar')
var user = new User('Chinh', 'Le', 'avatar')

admin.title = 'Học lập trình tại F8'
user.comment = 'abc xyz'

console.log(admin.getName()())
console.log(user)