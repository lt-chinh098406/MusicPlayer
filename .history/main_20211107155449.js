// Làm bài tập tại đây

var h1Element = document.querySelector('div h1')

console.log(h1Element)

var a = h1Element.firstChild.textContent

var textNode1 = a.trim()

console.log(textNode1)

var b = h1Element.lastChild.textContent.trim()

console.log(b)
