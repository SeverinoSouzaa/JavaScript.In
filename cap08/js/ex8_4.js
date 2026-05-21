const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const itens = []

//funções anônimas
//quando clicar no ckeck de pizza, exibe as opções de pizza e oculta de bebidas
frm.rbPizza.addEventListener("click", () => {
    frm.inBebida.className = "oculta" 
    frm.inPizza.className = "exibe"

    //"className" indica o estilo definido no css
})

//quando clicar no ckeck de bebidas, exibe as opções de bebidas e oculta de pizza
frm.rbBebida.addEventListener("click", () => {
    frm.inBebida.className = "exibe"
    frm.inPizza.className = "oculta"
})

//quando o campo recebe o foco
frm.inDetalhes.addEventListener("focus", () => {
    if (frm.rbPizza.checked){ //se pizza estiver select
        const pizza = frm.inPizza.value //recebe o tamanho
    

    //define o número de sabores para cada tamanho
    const num = pizza == "media"? 2 : pizza == "grande"? 3 : 4


    //exibe uma dica de preenchimento do campo detalhes
    frm.inDetalhes.placeholder = `Até ${num} sabores`

    }
})


//quando o campo perde o foco
frm.inDetalhes.addEventListener("blur", () => {
    frm.inDetalhes.placeholder = ""

})


//evento ao clicar em adicionar pedido
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let produto 

    //verifica se está marcado pizza, se não está marcado bebida e guarda o que precisamos de cada uma
    if (frm.rbPizza.checked){
        const num = frm.inPizza.selectedIndex //n° do item
        produto = frm.inPizza.options[num].text//textoItem
    } else {
        const num = frm.inBebida.selectedIndex//n do item
        produto = frm.inBebida.options[num].text//textItem
    }


    //pega o que foi digitado em detalhes
    const detalhes = frm.inDetalhes.value

    //sobe pro vetor o nome do produtor mais os detalhes em parenteses
    itens.push(produto + " (" + detalhes + ")")

    //exibi pulando linha de cada um
    resp.innerText = itens.join("\n")

    frm.reset() //limpa o form
    //dispara o click em rbPizza
    frm.rbPizza.dispatchEvent(new Event("click"))
})

