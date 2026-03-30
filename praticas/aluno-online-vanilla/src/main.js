import './style.css';

document.getElementById("formularioLogin").addEventListener('submit',function(e){
    e.preventDefault();

    const EmailInput = document.querySelector('#email');
    const senhaInput = document.querySelector('#senha');
    const erroEmail = document.querySelector('#emailErro');
    const erroSenha = document.querySelector('#senhaErro');

    erroEmail.textContent = '';
    erroSenha.textContent = '';
 
    //O formulário não pode ser enviado se houver campos vazios
    if(EmailInput.value === '' && senhaInput.value === ''){
        erroEmail.textContent = "O Campo de email é obrigatório";
        erroSenha.textContent = "O Campo de senha é obrigatório";
        return;
    }


    if(EmailInput.value === '') {
        erroEmail.textContent = "O Campo de email é obrigatório";
        return;
    }

    if(senhaInput.value === '') {
        erroSenha.textContent = "O Campo de senha é obrigatório";
        return;
    }

    window.location.href = "http://localhost:5173/";
})