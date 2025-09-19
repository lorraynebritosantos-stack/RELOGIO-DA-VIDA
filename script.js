// Defina a sua data de nascimento (exemplo: 01 de janeiro de 2009)
// Para mudar, basta alterar os valores para o ano, mês (0-11) e dia
const dataNascimento = new Date(15,07 ,2009 );

function atualizarRelogio() {
    const agora = new Date();
    const diferencaEmMilissegundos = agora - dataNascimento;

    // Converte a diferença de milissegundos para os formatos de tempo
    const segundosTotais = Math.floor(diferencaEmMilissegundos / 1000);
    const minutosTotais = Math.floor(segundosTotais / 60);
    const horasTotais = Math.floor(minutosTotais / 60);
    const diasTotais = Math.floor(horasTotais / 24);

    // Calcula os anos e meses
    const anos = Math.floor(diasTotais / 365.25);
    const meses = Math.floor((diasTotais % 365.25) / 30.44); // Média de dias por mês
    
    // Calcula o tempo restante (para o relógio)
    const segundos = segundosTotais % 60;
    const minutos = minutosTotais % 60;
    const horas = horasTotais % 24;
    const dias = diasTotais % 365.25;

    // Atualiza o HTML com os novos valores
    document.getElementById('anos').innerText = anos;
    document.getElementById('meses').innerText = meses;
    document.getElementById('dias').innerText = Math.floor(dias);
    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText = segundos;
}

// Chama a função pela primeira vez para evitar um atraso
atualizarRelogio();

// Atualiza o relógio a cada segundo (1000 milissegundos)
setInterval(atualizarRelogio, 1000);