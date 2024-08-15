/*Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o 
ano atual também no formato (YYYY). 
Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas.*/

let anoNasci, anoAtual
let idadeAnos, idadeMeses, idadeSemanas, idadeDias
let quantidadeMeses = 12, quantidadeSemanas = 52, quantidadeDias = 365

anoNasci = Number(prompt('Digite seu ano (formato YYYY) de nascimento: '))
anoAtual = Number(prompt('Digite o ano (formato YYYY) atual: '))

idadeAnos = anoAtual - anoNasci

idadeMeses = idadeAnos * quantidadeMeses
idadeSemanas = idadeAnos * quantidadeSemanas
idadeDias = 

alert('Você têm ' + idadeAnos + 'anos')