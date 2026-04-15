const prompt = require("prompt-sync")()

const clienteBanco = []


console.log("Programa Caixa - Digite 0 para sair")
do {

    const saque = Number(prompt("Valor do saque: "))

    if (saque == 0) {
        break
    }

    clienteBanco.push(saque)

    console.log("Saque Realizado")

} while (true)

const validos = clienteBanco.filter(cliente => cliente % 10 == 0)
const invalidos = clienteBanco.filter(cliente => cliente % 10 != 0)

const totalValidos = validos.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) //comeca em 0 o acumulador e pula pro valor atual, soma ele a coloca como acumulador e vai fazendo isso até acabar  


console.log("Saques Válidos")

console.log("-".repeat(40))

console.log(validos)

console.log("-".repeat(40))

console.log(`Total dos Saques: R$ ${totalValidos.toFixed(2)}`)
console.log(`N° de Tentativas de Saques Inválidos: ${invalidos.length}`)

