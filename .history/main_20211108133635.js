/* loading, HTML => W3C = >DOM
element
attribute href, src, id, class title
text
node
*/
/*
- Add attribute to element node
*/

var btnElement = document.querySelector('#btn')

btnElement.setAttribute('title', 'heading')

console.log(btnElement.getAttribute('title'))