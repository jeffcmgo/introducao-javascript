function obtemPacienteDoFormulario(form) {
    
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {

    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    let nomeTd = montaTd(paciente.nome, "info-nome");
    let pesoTd = montaTd(paciente.peso, "info-peso");
    let alturaTd = montaTd(paciente.altura, "info-altura");
    let gorduraTd = montaTd(paciente.gordura, "info-gordura");
    let imcTd = montaTd(paciente.peso, "info-peso");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    // adicionando o paciente na tabela
    pacienteTr.appendChild(nomeTd); // incorpora uma td dentro da tr
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

botaoAdicionar.addEventListener("click", function() {
    event.preventDefault(); // impede o navegador de atualizar a página como ação padrão
    
    let form = document.querySelector("#form-adiciona");
    let paciente = obtemPacienteDoFormulario(form);
    console.log(paciente);

    let pacienteTr = montaTr(paciente);

    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); // incorpora a tr dentro do tbody
    

});