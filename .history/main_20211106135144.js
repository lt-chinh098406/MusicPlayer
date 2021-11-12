var courses = [
  {
    id: 1,
    name: 'JS',
    coin: 250
  },
  {
    id: 2,
    name: 'HTML, CSS',
    coin: 0
  },
  {
    id: 3,
    name: 'Ruby',
    coin: 0
  },
  {
    id: 4,
    name: 'PHP',
    coin: 400
  },
  {
    id: 5,
    name: 'ReactJS',
    coin: 500
  }
]

// 1. forEach() duyet qua tung element va tra ve tung element do
// courses.forEach(function(course) {
//   console.log(course)
// })

// 2. every() kiem tra element co tm dk hay k - boolean (&&)
var isFree = courses.every(function(course, index) {
  console.log(index)
  return course.coin  === 0
})

console.log(isFree)

// 3. some() kiem tra trong array co elemnt tmdk hay k = boolean (||)

// 4. find() tim kiem - chi tra ve cai gan nhat tmdk

// 5. filter() tim kiem - tra ve all element tmdk

// 6. map() - eidt, thay doi elemnt cua arrray - render html len web

// 7 . reduve() - nhan lai 1 gia tri duy nhat sau khi tinh toan or xw ly element cua array