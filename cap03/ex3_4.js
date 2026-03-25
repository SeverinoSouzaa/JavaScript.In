//Puxa pacote ao programa
const prompt = require("prompt-sync")()

//lê e guarda o peso de uma ração e quanto o gato consome por dia da ração
const peso = Number(prompt("Pesao da ração (kg): "))
const consumo = Number(prompt("Consumo diário (gr): "))

//calcula quantos dias vai durar a ração e quanto sobra da ração
const cal1 = Math.floor((peso * 1000) / consumo) 
const cal2 = consumo * cal1
const cal3 = (peso * 1000) - cal2



//exibi os resultados
console.log(`Duração: ${cal1} dias`) //6dias
console.log(`Sobra: ${cal3}gr`)