var inputElement = document.querySelector('input[type="text"]')

inputElement.onkeydown = function(e) {
  console.log(e.target.value)
}

// inputElement.oninput = function(e) {
//   console.log(e.target.value)
// }