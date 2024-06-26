function calcularIdade(dataNascimento) {
    // Obtém a data atual
    const hoje = new Date();
    // Converte a data de nascimento para um objeto Date
    const dataNasc = new Date(dataNascimento);
    // Calcula a diferença entre o ano atual e o ano de nascimento
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    // Calcula a diferença entre o mês atual e o mês de nascimento
    const mes = hoje.getMonth() - dataNasc.getMonth();

    // Verifica se o aniversário ainda não ocorreu no ano atual
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
        idade--;
    }

    // Retorna a idade calculada
    return idade;
}

// Define a data de nascimento no formato 'AAAA-MM-DD'
const dataNascimento = '1999-08-15';  

// Chama a função calcularIdade e insere o resultado no elemento HTML com o ID "idade"
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('idade').textContent = calcularIdade(dataNascimento);
});