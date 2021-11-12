var btn = document.getElementById('btn')

btn.onclick = function() {
  console.log('Viec 1')
  console.log('Viec 2')
  console.log('Viec 3')
}

setTimeout(function() {
  btn.onclick = function() {}
}, 3000)