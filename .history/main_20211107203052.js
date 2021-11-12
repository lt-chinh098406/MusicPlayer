var inputElement = document.querySelector('input[type="text"]')

inputElement.onchange = function(e) {
  console.log(e.target.checked)
}

// inputElement.oninput = function(e) {
//   console.log(e.target.value)
// }