var boxElement = document.querySelector('.box')

setInterval(function() {
  console.log(boxElement.classList.toggle('red'))
}, 1000)