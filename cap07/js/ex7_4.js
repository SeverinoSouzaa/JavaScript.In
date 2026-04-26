const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    //obtem o nome e retira espaços em branco do início e final da string
    const nome = frm.inNome.value.trim()


    if(!nome.includes(" ")){ //se o campo não possuir espaços
        alert("Informe o nome completo...")
        return
    }

    const priEspaco = nome.indexOf(" ") //posição do primeiro espaço
    const ultEspaco = nome.lastIndexOf(" ") //posição do ultimo espaço

    //copia nome e sobrenome
    const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco)

    resp.innerText = `Crachá: ${cracha}`



})