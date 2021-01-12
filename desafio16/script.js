(function() {
    'use strict';

    var name = 'Pedro';

    for (var i = 0; i < name.length; i++) {
        console.log(`${name.charAt(i)} é a letra ${i} do seu nome`);
    }

    console.log('\nNome convertido à partir de um slug:');
    var fullName = 'pedro-vinicius';
    var newFullName = fullName.split('-').map(function(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }).join(' ');

    console.log(fullName);
    console.log(newFullName);

    var friends = ['sebastiao','antonio','raimundo','geralda'];
    var phrase = friends.reduce(function(acumulado, atual, index) {
        var separator = friends.length - 1 === index ? ' e ' : ', ';
        return acumulado + separator + atual;
    }).concat(' são seus amigos.');

    console.log(phrase);

    var roberto = 'roberto';
    console.log('\nEra ' + roberto + ' agora é: ' + roberto.replace('roberto', 'otrebor') )

    console.log('Fernando'.substring(8, 3));

    console.log('\nNome com letras intercaladas entre caixa alta e baixa:');
    var myName = 'RobertO';
    var myNewName = [];
    for ( var i = 0, len = myName.length; i < len; i++) {
        myNewName.push( i % 2 === 0 ? myName[i].toLowerCase() : myName[i].toUpperCase());
    }
    console.log( myNewName.join( '' ) );
    
   
})()