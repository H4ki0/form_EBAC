const form = document.getElementById('form-teste');
const primeiroValor = document.getElementById('spaceA');
const segundoValor = document.getElementById('spaceB');

function validaIgual(numero1, numero2) {
    return  numero1 < numero2;
}
form.addEventListener('submit', function(e) {
    let valorValido = false;
    e.preventDefault();

    document.querySelector('.error-message').style.display = 'none';
    document.querySelector('.message-success').style.display = 'none';


    const numeroA = Number(primeiroValor.value);
    const numeroB = Number(segundoValor.value);
    const messageSuccess = `O valor B <b>(${segundoValor.value})</b> é maior do que o valor A <b>(${primeiroValor.value})</b>: ${segundoValor.value} > ${primeiroValor.value}.`;

    valorValido = validaIgual(numeroA, numeroB);
    if (valorValido) {
        const containerMsgSuccess = document.querySelector('.message-success');
        containerMsgSuccess.innerHTML = messageSuccess;
        containerMsgSuccess.style.display = 'block';

        primeiroValor.value = '';
        segundoValor.value = '';

    } else {
        const containerMsgError = document.querySelector('.error-message');
        containerMsgError.innerHTML = `O valor B deve ser maior que o valor A`;
        containerMsgError.style.display = 'block';
    }
}) ;
