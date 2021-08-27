document.forms['cadastroform'].addEventListener('submit', (event) => {
    event.preventDefault();
    const button = document.getElementById('enviar');
    const i = document.querySelector('i');
    button.classList.add('buttonload');
    i.classList.add('fa');
    i.classList.add('fa-circle-o-notch');
    i.classList.add('fa-spin');
    
    fetch(event.target.action, {
        method: 'POST',
        body: new URLSearchParams(new FormData(event.target)) // event.target é o form
    }).then((resp) => {
        if (resp.redirected) {
            window.location.href = resp.url;
        }
        return resp.json();
    }).then((body) => {
        if (body.error == 1) {
            alert("Esse CPF já está cadastrado!")
        } 
    }).catch((error) => {
        // TODO handle error
    });
    button.classList.remove('buttonload');
    i.classList.remove('fa');
    i.classList.remove('fa-circle-o-notch');
    i.classList.remove('fa-spin');
});

////////////////////////////////////////////////////////////
// Validação CPF - Front
function validaCPF(cpf1){
    if(cpf1.length != 11){
        return false;
    }
    else{

        let numeros =  cpf1.substring(0, 9);
        let digitos = cpf1.substring(9);

        let soma = 0;
        for (var i = 0; i < 10; i++){
            soma += numeros.charAt(-1 + i) * i;
            
        }
        console.log(`resultado soma primeiro digito: ${soma}`);
        
        let resultado = (soma % 11) >= 10 ? 0 : soma % 11;
            console.log(`resto = ${resultado}`);

        //validação do primeiro digito
        if (resultado != digitos.charAt(0)){
            return false;
        }

        soma = 0;
        numeros = cpf1.substring(0, 10);

        for(var k = 0; k < 11; k++){
            soma += numeros.charAt(0 + k) * k;
        }
        console.log(`resultado soma segundo digito: ${soma}`);
        

        resultado = (soma % 11) >= 10 ? 0 : soma % 11;
            console.log(`resto = ${resultado}`);

        // Validação do segundo digito
        if (resultado != digitos.charAt(1)){
            return false;
        }
        
        return true;
    }
}

function validacao(){
    console.log("iniciando validação")

    let cpf1 = document.getElementById("cpf").value;
    let resultadoValidacao = validaCPF(cpf1);

    if (resultadoValidacao){
        console.log('cpf OK');
    }
    else{
        alert('CPF Inválido')
        document.getElementById('cpf').value=("");
    }
}



////////////////////////////////////////////////////////////
// Validação do CEP
function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('cep').value=("");
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
};