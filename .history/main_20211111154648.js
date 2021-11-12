const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

const tabActive = $('.tab-item.active')
const line = $('.tabs .line')

console.log(line.style.left = tabActive.offsetLeft)
console.log(line.style.width = tabActive.offsetWidth)

tabs.forEach((tab, index) => {
  const pane = panes[index]

  tab.onclick = function() {
    $('.tab-item.active').classList.remove('active')
    $('.tab-pane.active').classList.remove('active')

    this.classList.add('active')
    pane.classList.add('active')
  }
})