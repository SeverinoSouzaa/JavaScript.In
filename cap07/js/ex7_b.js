const frm = document.querySelector("form") 
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {   
  e.preventDefault() 

  const frase = frm.inFrase.value.toUpperCase()     

  if (frase.indexOf(" ") == -1) {
    alert("Informe, por favor, uma frase")
    frm.inFrase.focus()
    return
  }

  
  //guarda a frase limpa, sem espaços
  const frase2 = frase.replace(/ /g, "")

  //pega o tamano= ex radar: 5
  const tam = frase2.length

  //diz de cara que iguais é verdadeiro, precisamos agora verificar e provar quando não for
  let iguais = true


  //laço de repetição  que começa no indice 0 e vai até a metade da palavra, ou seja radar = 5, metade = 2
  for (let i = 0; i < tam / 2; i++) {
   
    //condição para: frase2[i]= começa em 0, o primeiro indice. Se não for igual a: frase2[tam - 1 - 1] é falso. Isso porque radar tem 5 de tamanho mas o seu indice vai ate 4 por isso tam - 1 e - 1 para olhar pro primeiro depois da metade e ir subindo
    if (frase2[i] != frase2[tam - 1 - i]) {
      iguais = false
      break
    }
  }

  if (iguais) {
    resp.innerText = `${frase} é um Palíndromo`
  } else {
    resp.innerText = `${frase} Não é um Palíndromo`
  }
})
