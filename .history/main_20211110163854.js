// function Course(name, price) {
//   this.name = name;
//   this.price = price;

//   this.getNAme = function() {
//     return this.name
//   }

//   const isSuccess = false
// }

class Course {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

const phpCourse = new Course('PHP', 1000)
const jsCourse = new Course('JavaScript', 1200)

console.log(phpCourse)
console.log(jsCourse)