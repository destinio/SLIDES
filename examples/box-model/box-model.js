const sizeDiv = document.querySelector('#size')
const box = document.querySelector('main')

let height = box.offsetHeight
let width = box.offsetWidth

sizeDiv.textContent = `${height}px x ${width}px`

box.addEventListener('click', () => {
  box.classList.toggle('border-box')

  height = box.offsetHeight
  width = box.offsetWidth

  sizeDiv.textContent = `${height}px x ${width}px`
})
