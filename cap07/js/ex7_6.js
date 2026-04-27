const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const senha = frm.inSenha.value
    const erros = []

    if (senha.length < 8 || senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres")
    }

    if (senha.match(/[0-9]/g) == null) {
        erros.push("possuir números (no mínimo, 1")
    }

    if (!senha.match(/[a-z]/g)) {
        erros.push("possuir pelo menos uma letra minúscula")

    }

    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
        erros.push("possuir pelo menos duas letras maiúscula")
    } 

    if (!senha.match(/[\W|_]/g)) {
        erros.push("possuir pelo menos um símbolo")
    }

    if ( erros.length == 0 ){
        resp.innerText = "Ok! Senha Válida"
    } else {
        resp.innerText = `Erro...A senha deve ${erros.join(", ")}`
    }

})