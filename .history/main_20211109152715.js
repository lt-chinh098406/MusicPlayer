var users = [
  {
    id: 1,
    name: 'Kien Dam'
  },
  {
    id: 2,
    name: 'Son Dang'
  },
  {
    id: 3,
    name: 'Hung Dam'
  }
  // ...
]

var comments = [
  {
    id: 1,
    user_id: 1,
    content: 'Anh Sơn chưa ra video :('
  },
  {
    id: 2,
    user_id: 2,
    content: 'Vừa ra xong em ơi!'
  }
]

// 1: Gọi lên API lấy cmt
// 2: Từ cmt lấy ra user_id,
// 3: Từ user_id lấy ra user tương ứng

// fake API
function getComments() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(comments) // nếu resolve tra ve data cmt fake o tren
    }, 1000) // Mô phỏng internet bị châm
  })
} // Lấy nội dung cmt

getComments()
  .then(function(comments) {
    console.log(comments)
  })