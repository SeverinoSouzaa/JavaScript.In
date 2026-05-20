const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

//função que começa com o parametro "ano" como exemplo vazio, anoAtual olhamos para a data e pegamos o ano atual, depois fazemos uma condição para verificar se o nosso parametro vazio é igual ao anoAtual que pegamos ou outras condições

//ano recebe então o ano que o usuario digitar no campo
const classificarVeiculo = (ano) => {
    const anoAtual = new Date().getFullYear()
    let classif
    if(ano == anoAtual){
        classif = "Novo"
    } else if (ano == anoAtual - 1 || ano == anoAtual - 2){
        classif = "Seminovo"
    } else {
        classif = "Usado"
    }
    return classif
}

const calcularEntrada = (valor, status) => status == "Novo" ? valor * 0.5 : valor * 0.3

//recebendo do "const entrada" fica: valor: digitado pelo user, status: resultado da função classificação 


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const modelo = frm.inModelo.value//le e guarda o modelo 

    const ano = Number(frm.inAno.value) //le  e guarda o ano que vamos usar na função

    const preco = Number(frm.inPreco.value)
    //le e guarda o preco

    const classificacao = classificarVeiculo(ano) //Aqui recebe o valor da função classificar veiculo com o parametro vazio sendo preenchido pela variavel ano onde o user digitou 

    const entrada = calcularEntrada(preco, classificacao)// Aqui recebe o valor da função calcularEntrada atribuindo aqueles parametros vazios o "preco" e "classificação"

    
    const parcela = (preco - entrada) / 10

    resp1.innerText = modelo + " - " + classificacao
    resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`
    resp3.innerText = `10x de R$ ${parcela.toFixed(2)}`

})