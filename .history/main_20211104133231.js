var myObject = {
  name: 'Chinh',
  age: 22,
  address: 'Viet Nam',
  email: 'erqwrqwr',
  getName: function(){
    return this.name
  }
}

console.log(myObject.getName())