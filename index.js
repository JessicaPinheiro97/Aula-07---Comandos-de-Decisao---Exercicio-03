const prompt = require("prompt-sync")();

var nome = prompt("Digite o nome: ");

var valor = parseFloat(prompt("Digite o valor: "));

if (valor < 1000) {
  var desconto = valor * 0.05;
}

else if (valor <= 5000) {
  var desconto = valor * 0.10;
}
else {
  var desconto = valor * 0.15;
}

console.log("O desconto foi de: R$ ", desconto);