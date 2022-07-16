const botaoHeader = document.getElementById('btn-header');

const email = document.getElementById('email-header');

const senha = document.getElementById('senha-header');

function validarBotao() {
  if (email.value !== 'tryber@teste.com' && senha.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

botaoHeader.addEventListener('click', validarBotao);

const check = document.getElementById('agreement');
const botaoSubmit = document.getElementById('submit-btn');

function enabledBtn() {
  if (botaoSubmit.disabled === true) {
    botaoSubmit.disabled = false;
  } else {
    botaoSubmit.disabled = true;
  }
}

check.addEventListener('click', enabledBtn);

const textarea = document.getElementById('textarea')
const counter = document.getElementById('counter')

const contador = (event) => {
  let limite = 500;
  let count = textarea.value.length
  counter.innerText = Math.abs(count - limite) 
  if (count >= limite) {
    event.preventDefault()
  } 
}

textarea.addEventListener('input', contador)