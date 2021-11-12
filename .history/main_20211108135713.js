/* loading, HTML => W3C = >DOM
element
attribute href, src, id, class title
text
node
*/
/*
- Add, get attribute =>  element node
- InnerText and textContent
- InnerHTML and OuterHTML
- Node properties
- DOM CSS
- ClassList Property
  + add
  + contains
  + remove
  +toggle
*/

var boxElement = document.querySelector('.box')

setTimeout(function() {
  boxElement.classList.add('red')
}, 1000)
