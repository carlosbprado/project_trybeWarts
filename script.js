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


 const check = document.getElementById('agreement')
 const botaoSubmit = document.getElementById('submit-btn')

 check.addEventListener('click', enabledBtn)

 function enabledBtn () {
   if (botaoSubmit.disabled === true) {
    botaoSubmit.disabled = false  
  } else {
    botaoSubmit.disabled = true
  }
 }