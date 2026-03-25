const prompt = require("prompt-sync")()

//ler salario e tempo do funcionario na empresa e guardar
const salario = Number(prompt("Salário R$: "))
const tempo = Number(prompt("Tempo (anos): "))
//calculo a cada 4 anos recebe um acréscimo de 1% no salário
const anos = Math.floor(tempo / 4)
const salarioFinal = (anos / 100) * salario + salario
//exibi o número de quadrienos a qual tem direito e o salário final
console.log(`Quadriênios: ${anos}`)
console.log(`Salário Final : ${salarioFinal.toFixed(2)}`)