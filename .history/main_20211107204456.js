var inputElement = document.querySelector('input[type="text"]')

inputElement.onkeydown = function(e) {

  switch(e.which) {
    case 13:
      console.log('Send chat')
      break
    case 27:
      console.log('Exit')
      break
    case 37:
      console.log('Left')
      break
    case 39:
      console.log('Right')
      break
  }
}

// inputElement.oninput = function(e) {
//   console.log(e.target.value)
// }