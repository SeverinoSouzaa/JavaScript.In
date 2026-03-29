const frm = document.querySelector("form")
const resp1 = document.querySelector("#tempo")
const resp2 = document.querySelector("#troco")


frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const valor = Number(frm.inValor.value)

    if (valor < 1.00) {
        alert(`Valor Insuficiente (no mínimo, R$ 1.00)`)
        frm.inValor.focus()
        return
    }

    let tempo
    let troco



    if (valor < 1.75) {
        tempo = 30
        troco = valor % 1.00
    } else if (valor < 3.00) {
        tempo = 60
        troco = valor % 1.75
    } else {
        tempo = 120
        troco = valor % 3.00

    }





    resp1.innerText = `Tempo: ${tempo}min`

    if (troco > 0) {
        resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
    }









})