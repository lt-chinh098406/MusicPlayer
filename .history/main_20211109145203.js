var users = [
  {
    id: 1,
    name: 'Chinh Le'
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

// Bước 1: Gọi lên API lấy cmt
// Bước 2: Từ cmt lấy ra user_id,
// Bước 3: Từ user_id lấy ra user tương ứng

// fake API
function getComments() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      var result = users.filter(function(user) {
        return userIds.includes(user.id)
      })
      resolve(result)
    }, 1000)
  })
}

function getUsersByIds(userIds) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(comments)
    }, 1000)
  })
}

getComments()
  .then(function(comments) {
    var userIds = comments.map(function(comment) {
      return comment.user_id
    })

    console.log(userIds)
  })