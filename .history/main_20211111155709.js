const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

const tabActive = $('.tab-item.active')
const line = $('.tabs .line')

console.log(line)

console.log({tabActive})

tabs.forEach((tab, index) => {
  const pane = panes[index]

  tab.onclick = function () {
    tabActive.classList.remove('active')
    $('.tab-pane.active').classList.remove('active')

    this.classList.add('active')
    pane.classList.add('active')
  }
})