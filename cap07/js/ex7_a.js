const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const msg = frm.inMensagem.value
    let par = ""
    let impar = ""

    for (let i = 1; i < msg.length; i += 2) {
        par += msg[i]

    }

    for (let i = 0; i < msg.length; i += 2) {
        impar += msg[i]
    }

    resp.innerText = `${par}${impar}`


})

frm.btDecrip.addEventListener("click", () => {

    //verifica se o campo possui algo
    if (!frm.checkValidity()) {
        alert("Informe a mensagem criptografada")
        frm.inMensagem.focus()
        return
    }


    //le a mensagem criptografada
    const mensagem = frm.inMensagem.value


    //define o tamanho da string
    const tam = mensagem.length

    //pega a metade da palavra pra saber que as primeiras são pares e as ultimas são impares
    const metade = Math.floor(tam / 2)


    //espaço para concatenar
    let resposta = ""


    //se o tamanho for par
    if (tam % 2 == 0) {

        //laço de repetição que começa na metade, pois a primeira letra verdadeira da palavra está depois das pares, sendo a primeira impar, ou seja, depois da metade 

        //opepreaocmr acld= 8 = c
        for (let i = metade; i < tam; i++) {


            //pega a letra do i(8 = c) = cmr acld 
            resposta += mensagem.charAt(i)

            //pega a letra do i(8=c) - metade (8-8=0, então pega o indice 0) = opepreao
            resposta += mensagem.charAt(i - metade)


            //Assim vai se grudando a primeia com a segunda a cada volta
            //1 volta: co
            //2 volta : comp
            //3 volta: compre
            //....
        }
    } else {
        for (let i = metade; i < tam - 1; i++) {
            resposta += mensagem.charAt(i)
            resposta += mensagem.charAt(i - metade)
        }
        resposta += mensagem.charAt(tam - 1)
    }

    resp.innerText = resposta
})

