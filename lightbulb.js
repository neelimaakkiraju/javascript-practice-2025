const container = document.createElement('h1')
container.textContent = 'LightBulb'

document.body.appendChild(container)

const imgElement = document.createElement('img')
imgElement.src = 'https://cdn.pixabay.com/photo/2017/08/17/21/22/light-bulb-2652929_960_720.png'
imgElement.width=200
imgElement.height=200
document.body.appendChild(imgElement)

const buttonElement = document.createElement('button')
buttonElement.textContent='Turn on the bulb'
document.body.appendChild(buttonElement)

const buttonElement2 = document.createElement('button')
buttonElement2.textContent='Turn off the bulb'
document.body.appendChild(buttonElement2)

buttonElement2.addEventListener('click',()=>{
 imgElement.src="https://knowledge2life.com/img/Picture1_js_intt.png"


})

buttonElement.addEventListener('click',()=>{
    imgElement.src="https://cdn.pixabay.com/photo/2017/08/17/21/22/light-bulb-2652929_960_720.png"
   })