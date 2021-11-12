var btn = document.getElementById('btn')

function viec1() {
  console.log(Math.random())
}

btn.addEventListener('click',viec1)

setTimeout(function () {
  btn.removeEventListener('click', viec1)
}, 3000)