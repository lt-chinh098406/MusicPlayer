var aElements = document.links

for (var i in aElements) {
  aElements[i].onclick = function(e) {
    if (!e.target.href.startsWith('https://fullstack.edu.vn') ){
      e.preventDefault();
    }
  }
}
