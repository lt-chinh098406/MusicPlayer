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
  },
  {
    id: 3,
    user_id: 1,
    content: 'Ok. Cam on anh'
  }
]

function getComments() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(comments)
    }, 1000)
  })
}

function getUserByIds(userIds) {
  return new Promise(function(resolve) {
    var result = users.filter(function(user) {
      return userIds.includes(user.id)
    })
    setTimeout(function() {
      resolve(result)
    }, 1000)
  })
}

getComments()
  .then(function(comments) {
    var userIds = comments.map(function(comment) {
      return comment.user_id
    })

    return getUserByIds(userIds)
      .then(function(users) {
        return {
          users: users,
          comments: comments
        }
      })
  })
  .then(function(data) {
    var blockElement = document.getElementById('comment-block')

    var html = ''

    data.comments.forEach(function(comment) {
      var user = data.users.find(function(user) {
        return user.id === comment.user_id
      })
      console.log(user)
    })

  })

