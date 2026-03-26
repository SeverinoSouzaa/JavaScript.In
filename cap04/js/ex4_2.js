//referencia formulario e saida de dados

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um evento que ocorre ao clicar no botão submite

frm.addEventListener("submit", (e) => {

//vai ler e guardar as info digitadas e selecionadas

    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

//cria várivel peso
    let peso



//cria as condições


//declara o 22 para homens e 21 mulheres, pega a altura informada e elevada ao quadrado (formula fixa)


    if (masculino) {
        peso = 22 * Math.pow(altura, 2) 
    } else {
        peso = 21 * Math.pow(altura, 2)
    }

//Simplificando codigo
//const peso = masculino ? 22 * Math.pow(altura, 2)  : peso = 21 * Math.pow(altura, 2)

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}kg`

    frm.addEventListener("reset", () => {
        resp.innerText = ""
    })

    e.preventDefault()


})