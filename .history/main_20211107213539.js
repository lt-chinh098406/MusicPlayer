var btn = document.getElementById('btn')

function viec1() {
  console.log(Math.random())
}

function viec2() {
  console.log('Việc 2')
}

function viec3() {
  console.log('Việc 3')
}

btn.addEventListener('click', viec1, viec2, viec3)