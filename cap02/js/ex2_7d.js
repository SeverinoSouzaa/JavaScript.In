//apontar para o que vou usar a partir do html
const frm = document.querySelector("form")
const resp1 = document.querySelector("#respPromo")
const resp2 = document.querySelector("#respUltimo")

//ligando motor ao clicar em submeter
frm.addEventListener("submit", (e) => {
    //ler e guardar o que foi digitado
    const prod = frm.inProduto.value
    const preco = Number(frm.inPreco.value)
    //faz o calculo da questão e guarda na memoria
    const resul1 = preco * 0.5
    const resul2 = (preco * 2) + resul1
    //exibi e mostra a saida(resultado)
    resp1.innerText = `${prod} - Promoção: Leve 3 por R$: ${resul2.toFixed(2)}`
    resp2.innerText = `O 3° produto custa apenas R$: ${resul1.toFixed(2)}`
    //Não atualizar página
    e.preventDefault()

})

