const frm = document.querySelector("form")
const resp1 = document.querySelector("#formam")
const resp2 = document.querySelector("#tipo")

frm.addEventListener("submit", (e) => {
    e.preventDefault()


    const ladoa = Number(frm.ladoA.value)
    const ladob = Number(frm.ladoB.value)
    const ladoc = Number(frm.ladoC.value)

    let Lados
    
    Lados = (ladoa + ladob >ladoc) && (ladoa + ladoc > ladob) && (ladob + ladoc > ladoa)

    if (Lados) {

       resp1.innerText = `Lados podem formar um triângulo`

    } else {
        resp1.innerText = `Lados não podem formar um triângulo`
    }


    let tipo

    if ((ladoa == ladob) && (ladoa == ladoc) && (ladob == ladoc)) {
        tipo = `Equilátero`
    } else if ((ladoa == ladob) || (ladoa == ladoc) || (ladob == ladoc)) {
        tipo = `Isósceles`
    } else {
        tipo = `Escaleno`
    }

    if(Lados) {
        resp2.innerText = `Tipo: ${tipo}`
    }

})