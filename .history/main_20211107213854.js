var btn = document.getElementById('btn')

function viec1() {
  console.log('Việc 1')
}

function viec1() {
  console.log('Việc 2')
}

btn.addEventListener('click',viec1)
btn.addEventListener('click',viec2)

setTimeout(function () {
  btn.removeEventListener('click', viec1)
}, 3000)