const prompt = require("prompt-sync")()

const user = prompt("Informe o seu ID cadastrado: ")

const cadastrado = "Severino"


if (user != cadastrado) {
    console.log("Acesso Negado!")
} else {
    console.log("Acesso liberado!")
    const saque = Number(prompt("Informe o valor do saque: "))

    if (saque >= 10) {
        console.log("Saque efetuado com sucesso!")
    } else {
        console.log("Valor minimo para saque de 10 R$!")
    }

}