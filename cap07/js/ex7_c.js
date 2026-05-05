const frm = document.querySelector("form") // obtém elementos da página
const resp1 = document.querySelector("#outDataDesc")
const resp2 = document.querySelector("#outValorDesc")

frm.addEventListener("submit", (e) => {          // "escuta" evento submit do form
  e.preventDefault()                             // evita envio do form

  const data = frm.inDataInfra.value
  const valor = Number(frm.inMulta.value)

  // declara variável do tipo date
  const dataLimite = new Date()

  // obtém as partes da data da multa
  const partes = data.split("-")
  // "seta" as partes da data
  dataLimite.setDate(Number(partes[2]))
  dataLimite.setMonth(Number(partes[1]) - 1)
  dataLimite.setFullYear(Number(partes[0]))

  const dia = dataLimite.getDate()    // obtém o dia da multa

  dataLimite.setDate(dia + 90)      // aumenta 90 dias na data da multa
  const mes = dataLimite.getMonth() + 1
  const ano = dataLimite.getFullYear()

  const comDesconto = valor * 0.80

  resp1.innerText = "Data Limite para Pagar com Desconto: " + (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano
  resp2.innerText = "Valor com Desconto R$: " + comDesconto.toFixed(2)
})
