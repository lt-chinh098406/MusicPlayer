var aElements = document.links

for (var i in aElements) {
  aElements[i].onclick = function(e) {
    console.log(e.target.href)
  }
}