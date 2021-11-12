var boxElement = document.querySelector('.box')

setTimeout(function() {
  console.log(boxElement.classList.toggle('red'))
}, 3000)