/*Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, 
realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela.*/

let peso, altura
let IMC

peso = Number(prompt('Digite o seu peso em Kg: '))
altura = Number(prompt('Digite sua altura: '))

IMC = peso / altura * altura

alert('Seu IMC é:\n' + IMC)