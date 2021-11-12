var h1Element = document.querySelectorAll('h1')

for (var i in h1Element) {
  h1Element[i].onclick = function(e) {
    console.log(e.target)
  }
}
