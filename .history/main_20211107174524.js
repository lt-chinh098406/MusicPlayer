var boxElement = document.querySelector('.box')

boxElement.classList.add('red')


setTimeout(function() {
  console.log(boxElement.classList.remove('red'))
}, 3000)