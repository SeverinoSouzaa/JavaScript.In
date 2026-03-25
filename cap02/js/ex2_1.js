// cria referência ao form e ao alemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value //obtém o nome digitado no formulario e guarda em "nome"

    resp.innerText = `Olá ${nome}` //exibi a resposta do programa

    e.preventDefault() // evita envio do form
})
