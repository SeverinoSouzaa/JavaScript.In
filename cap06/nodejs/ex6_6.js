const prompt = require("prompt-sync")()

console.log("--------Clientes Banco-----------")
console.log("Digite Fim para encerrar")

const clientes = []

do {

    const nome = prompt("Nome: ")

    if (nome == "Fim") {
        break
    }

    const idade = Number(prompt("Idade: "))

    clientes.push({ nome, idade })

    console.log("Ok! Cliente inserido na fila...")


} while (true)

console.log("\nFila Preferencial")
console.log("-".repeat(40))

const filaPref = clientes.filter(cliente => cliente.idade >= 60)
filaPref.forEach((fila, i) => {
    console.log(`${i + 1}. ${fila.nome}`)
})

console.log("\nFila Normal")
console.log("-".repeat(40))

const filaNormal = clientes.filter(cliente => cliente.idade <60)
filaNormal.forEach((fila,i) => {
    console.log(`${i+1}. ${fila.nome}`)
})




