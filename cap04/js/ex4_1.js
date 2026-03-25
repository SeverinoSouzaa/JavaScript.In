//referencia ao html
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//cria um evento que roda ao clicar em submeter
frm.addEventListener("submit", (e) => {


    e.preventDefault()

//lê e guarda os valores digitados no form

    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)

//calcula a média
    const media = (nota1 + nota2) / 2

//exibi os resultadoa
    resp1.innerText = `Média das Notas ${media.toFixed(2)}`



    if (media >= 7) {  //cria a condição

        resp2.innerText = `Parábens ${nome}! Você foi aprovado(a)`   // se verdadeiro, aprova
        resp2.style.color = "blue" //muda a cor para azul

    } else if (media >= 4) { //se não(else) (vem pra cá) e cria outra condição (se/if)
        resp2.innerText = `Atenção ${nome}. Você está em exame`
        resp2.style.color = "green" //muda a cor para verde
    }
    
    
    
    
    else {
        resp2.innerText = `Ops ${nome}... Você foi reprovado(a)` // se falso, reprova
        resp2.style.color = "red" // muda a cor para vermelho
    }


})