const prompt = require("prompt-sync")()

const velPermitida = Number(prompt("Velocidade Permitida: "))
const VelCondutor = Number(prompt("Velodidade do Condutor: "))


if (VelCondutor <= velPermitida) {
    console.log(`Situação: Sem Multa`)
} else if (VelCondutor <= velPermitida * 1.20) {
    console.log(`Situação: Multa Leve`)

} else {
    console.log(`Situação: Multa Grave`)
}