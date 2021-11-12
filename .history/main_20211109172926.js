var postApi = 'https://jsonplaceholder.typicode.com/posts'

fetch(postApi)
  .then(function(response) {
    return response.json() // JSON.parse: JSON => JS types
  })
  .then(function(posts) {
    var htmls = posts.map(function(post) {
      return `
      <li>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </li>
      `
    })
    var html = document.getElementById('post-block')
    html.innerHTML = htmls.join('')
  })
  .catch(function(error) {
    console.log('Co Loi!')
  })