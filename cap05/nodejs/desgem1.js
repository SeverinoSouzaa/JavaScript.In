const prompt = require("prompt-sync")()

let totalCompra = 0;
let qtdProdutos = 0;


console.log("--------Caixa de Frutaria--------------")

while (true) {

    const nome = prompt("Nome da Fruta:  ");
    const preco = Number(prompt("Preço por kg: "));
    const quilo = Number(prompt("Quantidade de kg: "));

    const total = preco * quilo;

    totalCompra += total; qtdProdutos++;

    const sorn = prompt("Deseja adicionar outra fruta? (S/N)");

    if (sorn == "N") {
        break;
    } 
} 

    console.log("--------------")
    console.log(`Total de produtos diferentes: ${qtdProdutos}`);
    console.log(`Valor total a pagar: R$ ${totalCompra.toFixed(2)}`);