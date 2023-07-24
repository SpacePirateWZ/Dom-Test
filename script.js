const container = document.querySelector('#container')

const para = document.createElement('p')
para.style.color = 'red'
para.innerText = "Hey I'm red!"

const header3 = document.createElement('h3')
header3.style.color = 'blue'
header3.innerText = "I'm a blue h3!"

const container2 = document.createElement('div')
container2.style.borderColor = 'black'
container2.style.backgroundColor = 'pink'

const header1 = document.createElement('h1')
header1.innerText = "I'm in a div"

const para2 = document.createElement('p')
para2.innerText = "ME TOO!"

container2.appendChild(header1)
container2.appendChild(para2)

container.appendChild(para)
container.appendChild(header3)
container.appendChild(container2)


console.log(document.querySelector('#container'))