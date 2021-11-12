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
// var isFree = courses.every(function(course, index) {
//   console.log(index)
//   return course.coin  === 0
// })

// console.log(isFree)

// 3. some() kiem tra trong array co elemnt tmdk hay k = boolean (||)
// var isFree = courses.some(function(course, index) {
//   console.log(index)
//   return course.coin  === 0
// })

// console.log(isFree)

// 4. find() tim kiem - chi tra ve cai gan nhat tmdk
// var a = courses.find(function(course, index) {
//   console.log(index)
//   return course.name === 'PHP'
// })
// console.log(a)

// 5. filter() tim kiem - tra ve all element tmdk
// var a = courses.filter(function(course, index) {
//   console.log(index)
//   return course.name === 'PHP'
// })
// console.log(a)

// 6. map() - eidt, thay doi elemnt cua arrray - render html len web
// var htmls = courses.map(function(course) {
//   return `<p>Hoc khoa hoc ${course.name} voi so coin la ${course.coin}</p>`
// })

// console.log(htmls.join(''))

// 7 . reduve() - nhan lai 1 gia tri duy nhat sau khi tinh toan or xw ly element cua array
// var numbers = [1, 2, 3, 4, 5, 6]
// var totalCoin = numbers.reduce(function (total, number){
//   return total + number
// })

// console.log(totalCoin)


  // 7.1 FLAT\
  // var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]
  // //(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // var flatArray = depthArray.reduce(function(flatOutput, depthItem){
  //   return flatOutput.concat(depthItem)
  // }, [])

  // console.log(flatArray)
  var topics = [
    {
      topic: 'Front-end',
      courses: [
        {
          id: 1,
          title: 'HTML, CSS'
        },
        {
          id: 2,
          title: 'JS'
        }
      ]
    },
    {
      topic: 'Back-end',
      courses: [
        {
          id: 1,
          title: 'PHP'
        },
        {
          id: 2,
          title: 'NodeJS'
        }
      ]
    }
  ]
  var newCourse = topics.reduce(function(newArray, courseItem) {
    return newArray.concat(courseItem.courses)
  }, [])

  var htmls = newCourse.map(function(course) {
    return `
    <div>
      <h2>${course.title}</h2>
      <p>${course.id}</p>
    </div>
    `
  })


