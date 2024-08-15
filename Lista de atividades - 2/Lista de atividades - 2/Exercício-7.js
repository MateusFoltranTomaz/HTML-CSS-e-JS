/*Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. 
Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. 
Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, 
mostrar a média de litros bebidos por pessoa na festa.*/

var numConvidados = Number(prompt("Quantas pessoas foram convidadas para a festa?"));
var litrosChoppComprados = Number(prompt("Quantos litros de chopp foram comprados?"));
var choppDesperdicado = Number(prompt("Quantos litros de chopp foram desperdiçados? (Digite 0 se não houve desperdício)"));
var choppSobrou = Number(prompt("Quantos litros de chopp sobraram? (Digite 0 se não sobrou chopp)"));

var totalLitrosConsumidos = litrosChoppComprados - choppDesperdicado - choppSobrou;
var mediaLitrosPorPessoa = totalLitrosConsumidos / numConvidados;

alert("A média de litros bebidos por pessoa é: " + mediaLitrosPorPessoa);
