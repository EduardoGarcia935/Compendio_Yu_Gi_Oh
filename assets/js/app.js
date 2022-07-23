const btnSubmit = document.querySelector('.submit')
const inputNome = document.querySelector('.nome')
const inputTipo = document.querySelector('.selection')
const area_cartas = document.querySelector('.area-cartas')


btnSubmit.addEventListener('click' , e=>{

    if(!inputNome.value || !inputTipo.value){
        return
    }
    area_cartas.innerHTML = null
    let nome = inputNome.value
    let tipo = inputTipo.value

    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?language=pt&fname=${nome}&type=${tipo}`)
        .then(resp => resp.json())
        .then(json =>{

            try {
                for(card of json.data){
                    criarCard(card.name , card.desc , `https://storage.googleapis.com/ygoprodeck.com/pics/${card.id}.jpg`)
                }
            } catch (error) {
                alerta()
            }
        })
})


function criarCard(nome , descricao , src){


    const divPai = document.createElement('div')
    divPai.setAttribute('class' , 'card')

    const divImg = document.createElement('div')
    divImg.setAttribute('class' , 'img_container')
    const img = document.createElement('img')
    img.setAttribute('src' , src)

    divImg.appendChild(img)

    const divText = document.createElement('div')
    divText.setAttribute('class' , 'text_container')
    const h3 = document.createElement('h3')
    h3.innerHTML = nome
    const p = document.createElement('p')
    p.innerHTML = descricao

    divText.appendChild(h3)
    divText.appendChild(p)

    divPai.appendChild(divImg)
    divPai.appendChild(divText)

    area_cartas.appendChild(divPai)
}

function alerta(){
    const div = document.createElement('div')
    div.setAttribute('class' , 'alert alert-warning alert-dismissible fade show')
    div.setAttribute('role', 'alert')

    const strong = document.createElement('strong')
    strong.innerHTML = 'Desculpe !'
    
    div.appendChild(strong)
    div.innerHTML += 'Sua carta não foi encontrada'

    const btn = document.createElement('button')
    btn.setAttribute('type' , 'button')
    btn.setAttribute('class' , 'btn-close')
    btn.setAttribute('data-bs-dismiss' , 'alert')
    btn.setAttribute('aria-label' , 'Close')

    div.appendChild(btn)

    area_cartas.appendChild(div)
}
