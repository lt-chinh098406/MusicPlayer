document.querySelector('button').onclick = function(e) {
  console.log('Viec 1')
  console.log('Viec 2')
  console.log('Viec 3')
}

setTimeout(function() {
  document.querySelector('button').onclick = function(e) {}
}, 3000)

