const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    const min = Number(frm.inMinutos.value)
    const tempo = Number(frm.inUso.value)


    const resul = Math.ceil(tempo/ 15) * min
   
    

    resp1.innerText = `Valor a pagar R$: ${resul}`

    e.preventDefault()


})