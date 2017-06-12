$(document).ready(function () {

    //Fecha o menu mobile ao clicar no link da âncora
    $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
    });
    
    var mensagemEnviada = false;
    // Área de contato.
    $('#enviar_mensagem').click(function (event) {
        if (!!mensagemEnviada) {
            alert('Uma mensagem já foi enviada.');
            return false;
        }

        mensagemEnviada = true;

        var $nome = $('#nome');
        var $email = $('#email');
        var $assunto = $('#assunto');
        var $mensagem = $('#mensagem');

        var mensagem = {
            nome: $nome.val(),
            de: $email.val(),
            assunto: $assunto.val(),
            mensagem: $mensagem.val()
        };

        var _isEmpty = function (campo) {
            var vazio = !campo.val() || (campo.val().trim() === '');
            if (vazio) {
                campo.addClass('invalid');
            } else {
                campo.removeClass('invalid');
            }
            return vazio;
        }

        if (_isEmpty($nome) | _isEmpty($email) | _isEmpty($assunto) | _isEmpty($mensagem)) {
            mensagemEnviada = false;
            alert('Todos os campos devem ser preenchidos.');
            return;
        }

        $.post('http://www.ipanmasces.com/api/contato.php', JSON.stringify(mensagem))
            .done(function () {
                alert('Mensagem enviada com sucesso.');
            })
            .fail(function () {
                mensagemEnviada = false;
                alert('Não foi possível enviar sua mensagem, tente novamente.');
            });
    });
});