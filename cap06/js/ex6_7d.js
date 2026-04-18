const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const candidatosVetor = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inCandidato.value
    const acertos = Number(frm.inAcertos.value)

    candidatosVetor.push({ nome, acertos })

    frm.btListar.dispatchEvent(new Event("click"))


})

frm.btListar.addEventListener("click", () => {

    if (candidatosVetor.length == 0) {
        alert("Não há candidatos na lista")
        return
    }

let lista = ""

for(const candidato of candidatosVetor){
    lista += candidato.nome + " - " + candidato.acertos + " acerto(s)\n"
}


resp.innerText = lista

frm.inCandidato.value = ""
frm.inAcertos.value = ""
frm.inCandidato.focus()

})

frm.btAprovados.addEventListener("click", () => {
    
})