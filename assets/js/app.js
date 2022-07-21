const btnSubmit = document.querySelector('.submit')
const inputNome = document.querySelector('.nome')
const inputTipo = document.querySelector('.selection')
const area_cartas = document.querySelector('.area-cartas')


btnSubmit.addEventListener('click' , e=>{

    if(!inputNome.value || !inputTipo.value){
        return
    }

    criarCard(inputNome.value , inputTipo.value , 'https://storage.googleapis.com/ygoprodeck.com/pics/27551.jpg')
})


function criarCard(nome , descricao , src){

    area_cartas.innerHTML = null

    const divPai = document.createElement('div')
    divPai.setAttribute('class' , 'card')

    const divImg = document.createElement('div')
    divImg.setAttribute('class' , 'img_container')
    const img = document.createElement('img')
    img.setAttribute('src' , src)

    divImg.appendChild(img)

    const divText = document.createElement('div')
    divText.setAttribute('class' , 'text_container')
    const h2 = document.createElement('h2')
    h2.innerHTML = nome
    const p = document.createElement('p')
    p.innerHTML = descricao

    divText.appendChild(h2)
    divText.appendChild(p)

    divPai.appendChild(divImg)
    divPai.appendChild(divText)

    area_cartas.appendChild(divPai)
}


