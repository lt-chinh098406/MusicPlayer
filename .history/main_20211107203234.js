var inputElement = document.querySelector('select')

inputElement.onchange = function(e) {
  console.log(e.target.value)
}

// inputElement.oninput = function(e) {
//   console.log(e.target.value)
// }