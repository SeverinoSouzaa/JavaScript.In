const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//Define as taxas que o banco cobra.
const TAXA_MULTA = 2 / 100
const TAXA_JUROS = 0.33 / 100

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const dataVenc = frm.inDataVenc.value
    const valor = Number(frm.inValor.value)

    //tira uma foto do exato milisegundo em que linha roda
    const hoje = new Date()
    const vencto = new Date()

    //corta toda vez que acha um traço
    //assim criando um vetor ["2026", "05", "03"]
    //[0]= ano, [1]= mes, [2] = dia
    const partes = dataVenc.split("-")

    //ajusta o dia e pega o indice 2
    vencto.setDate(Number(partes[2]))

    //são 12 meses, mas  começa em 0, tipo dez seria 11
    //então colocar - 1 pega o mes correto para nós
    vencto.setMonth(Number(partes[1]) - 1)

    //ajusta o ano e pega o indice 0
    vencto.setFullYear(Number(partes[0]))

    
    const atraso = hoje - vencto
    let multa = 0
    let juros = 0
    
    if (atraso > 0){
        const dias = atraso / 86400000
        multa = valor * TAXA_MULTA
        juros = valor * TAXA_JUROS * dias

    }


    const total = valor + multa + juros

    frm.outMulta.value = multa.toFixed(2)
    frm.outJuros.value = juros.toFixed(2)
    frm.outTotal.value = total.toFixed(2)

})