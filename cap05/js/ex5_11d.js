const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()


    const nomeFruta = frm.inFruta.value
    const num = Number(frm.inNumero.value)

    let exibir = ""

    for (let i = 1; i < num; i++) {

        exibir += `${nomeFruta} * `
    }

    resp.innerText = `${exibir} ${nomeFruta}`
})