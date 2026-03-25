const frm = document.querySelector("form")
const descr = document.querySelector("#med")
const promo = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{

    const desc = frm.inNome.value
    const valor = Number(frm.inPreco.value)

    const desconto = Math.floor(valor * 2)

    descr.innerText = `Promoção de: ${desc}`
    promo.innerText = `Leve 2 por apenas R$: ${desconto.toFixed(2)}`

    e.preventDefault()
})