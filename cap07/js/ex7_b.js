const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const frase = frm.inFrase.value.toUpperCase()

    const tam = frase.length

    const fraseLimpa = frase.replace(/ /g, "").toUpperCase()

    let inverso = fraseLimpa.charAt(tam - 1).toUpperCase()

    for (let i = tam - 2; i >= 0; i--) {
        inverso = inverso + fraseLimpa.charAt(i).toUpperCase()

        if (inverso == fraseLimpa){
            resp.innerText = `${frase} É um Palíndromo`
        } else {
            resp.innerText = `${frase} Não é um Palíndromo`
        }

    }

})