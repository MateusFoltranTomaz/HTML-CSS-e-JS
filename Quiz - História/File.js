function calcularPontuacao() {
    // Obter respostas selecionadas
    var resposta1 = document.getElementById('pergunta1').value;
    var resposta2 = document.getElementById('pergunta2').value;
    var resposta3 = document.getElementById('pergunta3').value;

    // Verificar se todas as perguntas foram respondidas
    if (resposta1 === '' || resposta2 === '' || resposta3 === '') {
        alert('Por favor, responda a todas as perguntas!');
        return;
    }

    // Calcular pontuação
    var pontuacao = 0;
    if (resposta1 === '1945') {
        pontuacao++;
    }
    if (resposta2 === '1822') {
        pontuacao++;
    }
    if (resposta3 === '1914') {
        pontuacao++;
    }

    // Exibir resultado
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = `Quiz Finalizado! Confira sua pontuação: ${pontuacao}/3`;

    // Verificar se pontuação máxima
    if (pontuacao === 3) {
        resultado.innerHTML += ' Parabéns! Você obteve a pontuação máxima! :D';
    }
}
