fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?language=pt')
    .then(resp => resp.json())
    .then( (json)=>{
        console.log(json)
    })

function criarCarta(id){
    document.createElement('div')
}