    ////////////////////////////////////////////////////////////
    // Rolagem da página
    let alturaDocumento = $(window).height(); //pega altura da janela

    function AlturaSecao() {
      $('.secao').height(alturaDocumento); //atribui o valor da variável a todas as divs com a classe secao
    }

    function ScrollSecao() {
    //   console.log('entrou');
      let body = $('html, body');
      if($(this).parent('.secao').is('#secao-01')) {
        //verifica se está na primeira seção e rola para a segunda
        body.animate({scrollTop: alturaDocumento},'500');
      } else {
        //rola para o início da página
        body.animate({scrollTop: 0}, '800');
      }
    }

    $('.icone-scroll').click(ScrollSecao); //chama a função na ação de click no ícone

    $(AlturaSecao); //chama a nossa função só depois que o documento estiver completamente carregado
    
////////////////////////////////////////////////////////////
// Validação CPF - Front
function validaCPF(cpf){
    if(cpf.length != 11){
        return false;
    }
    else{

        let numeros =  cpf.substring(0, 9);
        let digitos = cpf.substring(9);

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
        numeros = cpf.substring(0, 10);

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
    document.getElementById("erro").style.display = "none"

    let cpf = document.getElementById("cpf_digitado").value;
    let resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao){
        console.log('cpf OK');
    }
    else{
        document.getElementById("erro").style.display = "block";
    }
}