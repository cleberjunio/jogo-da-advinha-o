//Variáveis da aplicação

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const btnTry = document.querySelector('#btn-try');
const btnReset = document.querySelector('#btn-reset');


let randomNumber = Math.round(Math.random() * 10);
let attemps = 1;

//Eventos

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {

    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
});

//Funções callback's

function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector('#inputNumber');

    if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || (!Number(inputNumber.value) && Number(inputNumber.value) != 0)) {
        alert("Por favor insira um número de 0 a 10!")
    } else if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()

        screen2.querySelector('h2')
            .innerText = `Você acertou em ${attemps} tentativas`;


    }
    inputNumber.value = '';
    attemps++
}

function handleResetClick() {

    toggleScreen()

    attemps = 1;

    randomNumber = Math.round(Math.random() * 10);


}


function toggleScreen() {
    screen2.classList.toggle('hide');
    screen1.classList.toggle('hide');
}