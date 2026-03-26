//faz referencia ao html
const frm = document.querySelector("form")
const resp = document.querySelector("h3")


//criar evento ao clicar em submit
frm.addEventListener("submit", (e) => {


e.preventDefault()

//le e guarda o conteudo digitado
const horaBrasil = Number(frm.inHoraBrasil.value)

//calcula o horário da frança
let horaFranca = horaBrasil + 5

if (horaFranca > 24) { //se passar das 24 horas na frança
    horaFranca = horaFranca - 24  //subtrai 24

}


//mostra a saida dos dados
resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`


})





