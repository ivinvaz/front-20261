import './style.css';

const botao = document.querySelector('button');

const matriculaInput = document.querySelector('#matricula');

const senhaInput = document.querySelector('#senha');

botao.addEventListener('click',function(e){
    const erroMatricula = document.querySelector('#matriculaErro');
    const erroSenha = document.querySelector('#senhaErro');

    erroMatricula.textContent = '';
    erroSenha.textContent = '';
 
    if(matriculaInput.value === '') {
        erroMatricula.textContent = "Matrícula é obrigatório";
        return;
    }

    if(parseInt(matriculaInput.value) <= 0){
        erroMatricula.textContent = "Matricula deve ser um numero positivo";
        return;
    }

    if(senhaInput.value === '') {
        erroSenha.textContent = "Senha é obrigatório";
        return;
    }

    if(senhaInput.value.length < 8) {
        erroSenha.textContent = "Senha deve ter menos de 8 caracteres";
        return;
    }
})