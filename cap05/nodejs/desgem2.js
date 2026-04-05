const prompt = require("prompt-sync")()

console.log("--------Programa Desempenho da Turma--------")
console.log("----Digite FIM para encerrar----")


let totalNotas = 0
let regisAlunos = 0
let aprovados = 0

while (true) {

    const nomeAluno = prompt("Digite o nome do Aluno: ")

    if (nomeAluno == "FIM") {
        break
    }

    const notaAluno = Number(prompt("Digite a Nota do Aluno (0 a 10): "))

    if (notaAluno > 10) {
        console.log("Formato Inválido, Notas devem ser de 0 a 10")
    }

    else {

        totalNotas = totalNotas + notaAluno
        regisAlunos++

        if (notaAluno >= 7) {
            aprovados++

        }

    }

}

if (regisAlunos > 0) {
    const media = totalNotas / regisAlunos

    console.log(`A média da turma é: ${media.toFixed(2)}`)
    console.log(`O total de alunos aprovados é: ${aprovados}`)
} else {
    console.log("Nenhum aluno registrado.")
}


















//saber a media da turma e quantos foram aprovados