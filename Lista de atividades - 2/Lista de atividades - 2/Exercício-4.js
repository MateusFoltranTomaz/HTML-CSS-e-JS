/*Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. 
Em seguida o número de votos do candidato X, o número de votos do candidato Y, 
total de votos brancos e total de votos nulos 
(a soma desses quatro, deve ser igual ao total de eleitores). 
Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.*/

let numeroEleitores
let votosX, votosY, votosBrancos, votosNulos
let percVotosX, percVotosY, percVotosBrancos, percVotosNulos

numeroEleitores = Number(prompt('Digite o número de eleitores: '))

votosX = Number(prompt('Digite o número de votos do candidato X: '))
votosY = Number(prompt('Digite o número de votos do candidato Y: '))
votosBrancos = Number(prompt('Digite o número de votos brancos: '))
votosNulos = Number(prompt('Digite o número de votos nulos: '))

percVotosX = votosX * 100 / numeroEleitores
percVotosY = votosY * 100 / numeroEleitores
percVotosBrancos = votosBrancos * 100 / numeroEleitores
percVotosNulos = votosNulos * 100 / numeroEleitores

alert(`>>>> Resultado da Apuração dos Votos <<<<\n\nTotal de eleitores: ${numeroEleitores}\nPercentual candidato X: ${percVotosX}%\nPercentual candidato Y: ${percVotosY}%\nPercentual votos em branco: ${percVotosBrancos}%\nPercentual votos nulos: ${percVotosNulos}%`)