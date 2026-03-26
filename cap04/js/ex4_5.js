//referencia o html
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria evento que roda ao clicar em submit
frm.addEventListener("submit", (e)=> {

    e.preventDefault()


//le e guarda o número

    const numero = Number(frm.inNumero.value)

//calcula a raiz desse numero e guarda
    const raiz = Math.sqrt(numero)

//faz a condição
    if (Number.isInteger(raiz)) {  //se o número for inteiro
        resp.innerText = `Raiz: ${raiz}` //mostra a raiz
    } else {
        resp.innerText = `Não há raiz exata para ${numero}` //se não mostra erro
    }


})