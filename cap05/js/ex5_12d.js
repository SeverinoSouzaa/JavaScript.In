const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()


    const chinchilas = Number(frm.inNumero.value)
    const anos = Number(frm.inAnos.value)

    let resposta = `1° Ano: ${chinchilas}\n`
    let triplo = chinchilas * 3

    for (let i = 2; i <= anos; i++) {

        if (chinchilas < 2) {

            alert = "Número de chincilas deve ser Maior ou igual a 2 (casal)"

        } else {



            resposta = resposta + i + "° Ano: " + triplo + "\n"

        }
    }


    resp.innerText = resposta
})