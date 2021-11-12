document.querySelector('button').onclick = function(e) {
  e.stopPropagation()
  console.log('Click me!')
}