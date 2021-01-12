(function(win, doc) {
    'use strict';

    var username = prompt('Qual o seu nome?') || 'Desconhecido';
    //alert('Bem vindo, ' + username);

    var email = prompt('Qual o seu email?');

    var $inputUsername = doc.querySelector('input[type="text"]');
    console.log($inputUsername);

    var $inputEmail = doc.querySelector('input[type="email"]');
    console.log($inputEmail);

    var $message = doc.querySelector('textarea');
    console.log($message);

    $inputUsername.value = username;
    $inputEmail.value = email;

    var $button = doc.querySelector('button');
    
    $button.addEventListener('click', function(event) {
        event.preventDefault();
        if (!$inputUsername.value) 
            return alert('Preencha o nome de usuário!');
        if (!$inputEmail.value) 
            return alert('Preencha o campo de email!');
        if(!isValidEmail($inputEmail.value) )
            return alert('Entre com um e-mail válido!'); 
        if (!$message.value) 
            return alert('Preencha o campo de mensagem!');
        if (!confirm('Deseja realmente enviar o formulário?') ) 
            return alert('Formulário não enviado.');
        return alert('Enviado com sucesso!');
}, false);

    function isValidEmail(email) {
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email); 
    }

    console.log(isValidEmail($inputEmail.value));


})(window, document)