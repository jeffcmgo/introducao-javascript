let titulo = document.querySelector('.titulo');
    titulo.textContent = 'Aparecida Nutricionista';
let pacientes = document.querySelectorAll('.paciente');
let botaoAdicionar = document.querySelector("#adicionar-paciente"); 

titulo.addEventListener("click", function () {console.log("Olá! Eu fui clicado!");}); // evento de click com função anônima

function calculaImc(peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2); // funcao para limitar as casas decimais
}

for(let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];
    let peso = paciente.querySelector('.info-peso').textContent;    
    let altura = paciente.querySelector('.info-altura').textContent;
    let tdImc = paciente.querySelector('.info-imc');

    let pesoValido = true;
    let alturaValida = true;

    if(peso < 0 || peso > 300) { 
        pesoValido = false;
        tdImc.textContent = 'Peso inválido!';
        paciente.classList.add('paciente-invalido');
        //paciente.style.backgroundColor = 'lightcoral'; // stilizando com js
    }

    if(altura < 0 || altura > 3.00) {
        alturaValida = false;
        tdImc.textContent = 'Altura inválida!';
        paciente.classList.add('paciente-invalido');
        //paciente.style.backgroundColor = 'lightcoral'; // stilizando com js

    }

    if(pesoValido && alturaValida) {
        tdImc.textContent = calculaImc(peso, altura); 
    }    
}

