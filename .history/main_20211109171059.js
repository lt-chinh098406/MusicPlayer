var postApi = 'https://jsonplaceholder.typicode.com/posts'

fetch(postApi)
  .then(function(response) {
    return response.json() // JSON.parse: JSON => JS types
  })
  .then(function(posts) {
    console.log(posts)
  })