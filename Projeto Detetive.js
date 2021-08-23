/*Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
1.	"Telefonou para a vítima?"
2.	"Esteve no local do crime?"
3.	"Mora perto da vítima?"
4.	"Devia para a vítima?"
5.	"Já trabalhou com a vítima?" 
*/

console.log("Jogo do detetive");
console.log(`Você é suspeito de um crime! Responda as perguntas do detetive. Suas respostas determinarão se você é ou não o culpado pelo crime! Boa sorte! :D`);


let contador = 0

let resposta = prompt("Você telefonou para a vítima?\n").toLowerCase();

while (resposta != "s" && resposta != "n" && resposta != "sim" && resposta != "não" && resposta != "nao") {
  resposta = prompt(`
    Responda somente com s ou n.
    \nVocê telefonou para a vítima?\n`).toLowerCase()
}
if (resposta == "s" || resposta == "sim") {
  ++contador ;
}
 resposta = prompt("\nVocê esteve no local do crime?\n").toLowerCase();
 
 while (resposta != "s" && resposta != "n" && resposta != "sim" && resposta != "não" && resposta != "nao") {
   resposta = prompt(`
   Responda somente com s ou n.
   \nVocê esteve no local do crime?\n`).toLowerCase()
 }
if (resposta == "s" || resposta == "sim") {
  ++contador;
}
 resposta = prompt("\nVocê mora perto da vítima?\n").toLowerCase();
 
 while (resposta != "s" && resposta != "n" && resposta != "sim" && resposta != "não" && resposta != "nao") {
  resposta = prompt(`
    Responda somente com s ou n.
    \nVocê mora perto da vítima?\n`).toLowerCase()
  }
if (resposta == "s" || resposta == "sim") {
  ++contador;
}
 resposta = prompt("\nVocê devia para a vítima?\n").toLowerCase();
  
  while (resposta != "s" && resposta != "n" && resposta != "sim" && resposta != "não" && resposta != "nao") {
  resposta = prompt(`
    Responda somente com s ou n.
    \nVocê devia para a vítima?\n`).toLowerCase()
  }
if (resposta == "s" || resposta == "sim") {
  ++contador;
}
 resposta = prompt("\nVocê já trabalhou com a vítima?\n").toLowerCase();
 
 while (resposta != "s" && resposta != "n" && resposta != "sim" && resposta != "não" && resposta != "nao") {
  resposta = prompt(`
    Responda somente com s ou n.
    \nVocê já trabalhou com a vítima?\n`).toLowerCase()
  }
if (resposta == "s" || resposta == "sim") {
  ++contador;
} 
 

 if (contador < 2) {
   console.log(`Você é inocente! \nFez ${contador} ponto(s)!`)
 } else if (contador == 2) {
   console.log(`Você é suspeito! \nFez ${contador} ponto(s)!`)
 } else if (contador > 2 && contador < 5) {
   console.log(`Você é cúmplice! \nFez ${contador} ponto(s)!`)
 } else if (contador == 5) {
   console.log(`Você é o assassino! Não se mexa! \nFez ${contador} ponto(s)!`)
 }
































//Por Matheus Máximo.
  

  
  
