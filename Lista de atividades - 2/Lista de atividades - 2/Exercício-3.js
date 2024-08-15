/* Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. 
Mostrar o resultado na tela. */

let valor
let Celsius
let Fahrenheit

Celsius = Number(prompt("Digite o valor de celsius:"))
Fahrenheit = (Celsius * 9/5) + 32
valor = alert('Seu valor convertido para fahrenheit:\n' + Fahrenheit)