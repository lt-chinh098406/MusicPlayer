var btn = document.getElementById('btn')

function viec1() {
  console.log('Viec 1')
}

function viec2() {
  console.log('Viec 2')
}
function viec3() {
  console.log('Viec 3')
}
btn.addEventListener('click', viec1)
btn.addEventListener('click', viec2)
btn.addEventListener('click', viec3)

setTimeout(function() {
  btn.removeEventListener('click', viec2)
}, 2000)