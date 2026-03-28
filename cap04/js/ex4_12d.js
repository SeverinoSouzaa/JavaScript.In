const frm = document.querySelector("form")
const resp1 = document.querySelector("#tempo")
const resp2 = document.querySelector("#troco")


frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const valor = Number(frm.inValor.value)

    const regis1 ={valor1: 1.00, tempo1: "30"}
    const regis2 ={valor2: 1.75, tempo2: "60"}
    const regis3 ={valor3: 3.00, tempo3: "120"}
  

    if (valor < regis1.valor) {
        resp1.innerText = `Valor Insuficiente`
    }

    else if (valor <= regis2.valor1) {
        valor * regis1.tempo1
    }

    

   const tempoFinal = valor * mini 
   const troco = valor % valores

   resp1.innerText `Tempo: ${tempoFinal}`
   resp1.innerText `Troco R$: ${troco.toFixed(2)}`









})