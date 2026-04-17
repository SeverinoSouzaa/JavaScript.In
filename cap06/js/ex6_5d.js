const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const clubes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nomeClube = frm.inClube.value

    if (!isNaN(nomeClube)) {
        alert("Informe o nome de um clube válido (caracteres)")
        frm.inClube.focus()
        return
    }

    clubes.push(nomeClube)

    frm.inClube.value = ""
    frm.inClube.focus()

    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {

    if (clubes.length == 0) {
        alert("Não há clubes na lista")
        return
    }

    let lista = ""

    for (const clube of clubes) {

        lista += clube + "\n"
    }

    resp.innerText = lista

})

frm.btTabela.addEventListener("click", () => {

const tamanho = clubes.length

if (tamanho == 0 || (tamanho % 2 == 1)){
    alert("Deve haver número par de clubes na lista")
    inClube.focus()
    return

}

let jogos = ""

const ultimo = tamanho - 1

for (let i = 0; i < tamanho / 2; i++){
    jogos += clubes[i] + " x " + clubes[ultimo - i] + "\n"

}

resp.innerText = jogos





})