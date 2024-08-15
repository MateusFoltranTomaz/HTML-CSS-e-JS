/*Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. 
Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais.*/

var kgPlastico = Number(prompt("Quantos quilogramas de plástico deseja entregar?"))
var kgPapel = Number(prompt("Quantos quilogramas de papel deseja entregar?"))
var kgMetal = Number(prompt("Quantos quilogramas de metal deseja entregar?"))


var valorPlasticoPorKg = 2.00
var valorPapelPorKg = 3.00
var valorMetalPorKg = 5.00


var totalRecebido = ((kgPlastico / 10) * valorPlasticoPorKg) + ((kgPapel / 30) * valorPapelPorKg) + ((kgMetal / 50) * valorMetalPorKg)
                  

alert("Total a receber: R$" + totalRecebido)