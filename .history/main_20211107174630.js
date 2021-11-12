var boxElement = document.querySelector('.box')

setTimeout(function() {
  console.log(boxElement.classList.toggle('blue'))
}, 3000)