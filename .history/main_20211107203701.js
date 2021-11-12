var inputElement = document.querySelector('input[type="text"]')

inputElement.onkeyup = function(e) {
  console.log(e.target.value)
}

// inputElement.oninput = function(e) {
//   console.log(e.target.value)
// }