//seleciona elementos form e resposta do html
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//declara vetor para armazenar os numeros
const numeros = []


//alerta para quando clicar em adicionar
frm.addEventListener("submit", (e) => {
    e.preventDefault() 

    //le o numero digitado
    const numero = Number(frm.inNumero.value)

    //condição que diz se não for um número para inserir um
    if (isNaN(numero)) {
        alert("Informe um número!")
        return
    }


    //usa o metodo includes para verificar se o número inserido ja tem no vetor
    if (numeros.includes(numero)) {
        alert("Número repetido! informe outro")
        frm.inNumero.value = ""
        frm.inNumero.focus()
        return
    }

    //se não fo reptido adiciona no vetor na ultima posição
    numeros.push(numero)

    
    //mostra saida com join para transformar em uma lista de string
    resp1.innerText = "Números: " + numeros.join(", ")


    //limpa o campo e foca o cursor
    frm.inNumero.value = ""
    frm.inNumero.focus()



})

//evento ao clicar em ver ordem
frm.btVerificar.addEventListener("click", () => {

    if(numeros.length == 0){
        alert("Não há números na lista")
        return
    }

    //cria uma variavel com valor verdadeiro
    let crescente = true

    //laço de repetição que percorre o vetor verifica se o número da vez é maior que o próximo, se sim a variavel agora recebe falso e quebra o sistema
    for (let i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] > numeros[i + 1]) {
            crescente = false
            break
        }
    }

    //se crescente verdadeiro estão em ordem
    if (crescente) {
        resp2.innerText = "Os números estão em ordem crescente"

    //se crescente falso não estão em ordem
    } else {
        resp2.innerText = "Os números não estão em ordem crescente"

    }

})