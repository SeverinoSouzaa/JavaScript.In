//pega essses lugares onde vamos usar para escrever
const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

//cria um espaço ai pra guardar uma coleção de dados
const pacientes = []

//faça algo que clicarem nesse botão
frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    //le o nome que o usuario digitou no campo
    const nome = frm.inPaciente.value

    //pega esse nome e joga no espaço criado, em ultimo lugar
    pacientes.push(nome)

    //cria um lugar onde vamos juntar tudo o que temos pra exibir
    let lista = ""

    //percorra por todo o meu espaço, vendo os nomes do inicio ate o final, sempre adicionando mais um na sua contagem
    for (let i = 0; i < pacientes.length; i++) {

        //gruda tudo o que temos pra sair em algum lugar
        lista += `${i + 1}. ${pacientes[i]}\n`
    }

    //exibi no espaço de referencia onde dissemos escrever
    respLista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})

//fica esperto, quando clicarem nesse outro botao, faça tudo que estiver dentro dele
frm.btUrgencia.addEventListener("click", ()=> {

    //verifica pra mim ai se o campo não está valido
    if(!frm.checkValidity()){

        //e se não estiver mostre isso
        alert("Informe o nome do paciente a ser atendido em caráter de urgência")
        frm.inPaciente.focus()
        return
    }

    //le o nome do campo
    const nome = frm.inPaciente.value
    
    //adiciona esse nome no inicio do nosso espaço de dados
    pacientes.unshift(nome)

    //cria um lugar que vamos mostrar tudo o que temos
    let lista = ""

    //percorre ai os meus dados e ache o seu conteudo e sua posição, depois junte tudo pra mostrar
    pacientes.forEach((paciente, i) => (lista += `${i+1}. ${paciente}\n`)) //paciente = conteudo do "vagão". i = posição do "vagão"

    //mostra tudo
    respLista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})


//faça o que estiver dentro quando clicarem aqui
frm.btAtender.addEventListener("click", ()=> {

    //verifica pra mim se o meu espaço de dados está vazio
    if (pacientes.length == 0) {

        //se estiver mostre isso
        alert("Não há pacientes na lista de espera")
        frm.inPaciente.focus()
        return
    }

    //remova um paciente que está no começo e guarde em "atender"
    const atender = pacientes.shift()

    //exibia tudo 
    respNome.innerText = atender

    //mostra ai lista de pacientes agora sem o que tiramos
    let lista = ""
    pacientes.forEach((pacientes, i) => (lista += `${i+1}. ${pacientes}\n`))
    respLista.innerText = lista



})




