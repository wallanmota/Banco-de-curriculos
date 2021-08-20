    var _AlturaDocumento = $(window).height(); //pega altura da janela

    function AlturaSecao() {
      $('.secao').height(_AlturaDocumento); //atribui o valor da variável a todas as divs com a classe secao
    }

    function ScrollSecao() {
      console.log('entrou');
      var body = $('html, body');
      if($(this).parent('.secao').is('#secao-01')) {
        //verifica se está na primeira seção e rola para a segunda
        body.animate({scrollTop: _AlturaDocumento},'auto');
      } else {
        //rola para o início da página
        body.animate({scrollTop: 0}, 'auto');
      }
    }

    $('.icone-scroll').click(ScrollSecao); //chama a função na ação de click no ícone

    $(AlturaSecao); //chama a nossa função só depois que o documento estiver completamente carregado
  