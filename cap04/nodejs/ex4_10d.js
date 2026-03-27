const prompt = require("prompt-sync")()

const numero = Number(prompt("Número: "))

if (Number.isInteger(numero/2)) {
    console.log(`O número é par!`)
} else {
    console.log("O número é Ímpar!")
}