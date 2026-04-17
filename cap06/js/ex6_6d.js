const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")


const numeros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()


    const numero = Number(frm.inNumero.value)

    if (isNaN(numero)) {
        alert("Informe um número!")
        return
    }



    if (numeros.includes(numero)) {
        alert("Número repetido! informe outro")
        frm.inNumero.value = ""
        frm.inNumero.focus()
        return
    }


    numeros.push(numero)

    let lista = ""

    for (const numerodavez of numeros) {
        lista += numerodavez + ","
    }

    resp1.innerText = `Números: ${lista}`



    frm.inNumero.value = ""
    frm.inNumero.focus()



})


frm.btVerificar.addEventListener("click", () => {

    let crescente = true

    for (let i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] > numeros[i + 1]) {
            crescente = false
            break
        }
    }

    if (crescente) {
        resp2.innerText = "Os números estão em ordem crescente"

    } else {
        resp2.innerText = "Os números não estão em ordem crescente"

    }





})