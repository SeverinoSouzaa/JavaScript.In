const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()


    const chinchilas = Number(frm.inNumero.value)
    const anos = Number(frm.inAnos.value)

    let resposta = ""
    let total = chinchilas

    for (let i = 1; i <= anos; i++) {
    
        if (chinchilas < 2) {

            alert = "Número de chincilas deve ser Maior ou igual a 2 (casal)"

        } else {

            
            resposta = resposta + i + "° Ano: " + total + " Chinchilas\n"

            total = total * 3

        }
    }

    resp.innerText = resposta
})