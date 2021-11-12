var inputElement = document.querySelector('select')

inputElement.onchange = function(e) {
  console.log(e.target)
}

// inputElement.oninput = function(e) {
//   console.log(e.target.value)
// }