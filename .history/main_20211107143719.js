var boxElement = document.querySelector('.box')

boxElement.innerHTML = '<h1 title="heading">Heading</h1>'

console.log(boxElement.querySelector('h1').textContent)