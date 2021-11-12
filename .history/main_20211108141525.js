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
- DOM events
*/

var a = document.links

for (var i in a) {
  a[i].onclick = function(e) {
    if(!e.target.href.startsWith('https://fullstack.edu.vn')) {
      e.preventDefault()
    }
  }
}



