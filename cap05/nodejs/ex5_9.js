const prompt = require("prompt-sync")()

const nome = prompt("Produto: ")
const etiquetas = Number(prompt("N° de Etiquetas: "))

let exibir = ""

for (let i = 1; i <= etiquetas; i++) {

    exibir += `${i}.${nome} \n`

}

console.log(exibir)