const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    //le o nome e guarda
    const funcionario = frm.inFuncionario.value

    //split cria partes a partir de espaços
    //agora cada parte do nome é uma posição
    const partes = funcionario.split(" ")

    //concatenar as letras
    let email = " "

    //guarda o tamanho do vetor
    //ex: Severino Alexandrino Neto = 3 
    //      0        1          2
    const tam = partes.length

    //percorre itens do vetor menos o último
    for (let i = 0; i < tam - 1; i++) {

        //percorre e pega as letras iniciais (charAt(0))
        email += partes[i].charAt(0)
    }

    //concatena as letras iniciais com a última parte(sobrenome) e empresa
    email += partes[2] + "@empresa.com.br"

    resp.innerText = `Email: ${email.toLowerCase()}`

})