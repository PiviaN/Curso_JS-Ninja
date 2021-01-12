(function() {
    'use strict';


    var pessoa1 = {
        name: 'Pedro',
        lastName: 'Nepomuceno'
    }

    var pessoa2 = {
        name: 'Delma',
        lastName: 'Salgado'
    }

    function getFullName() {
        return this.name + ' ' + this.lastName;
    }

    console.log('O nome das pessoas são:');
    console.log(getFullName.call(pessoa1));
    console.log(getFullName.call(pessoa2));

    function sum() {
        console.log(arguments);
        return Array.prototype.reduce.call(arguments, 
        function(accumulated, actualItem) {
            return Number(accumulated) + Number(actualItem);
            }
        );
    }

    console.log('\nSomar alguns números:');
    console.log(sum(1, 5, 10, 15, 16));
    console.log(sum(19, 88, 70, 42));
    console.log(sum(12, 15, 123));

    var userEntry = prompt('Entre com alguns valores que serão somados:');
    console.log('\nEntrada do usuário:', userEntry);

    console.log('\nFunção que limpa entrada do usuário (somente números):');
    function justNumbers(entry) {
        return entry.replace(/\D+/g, ',').split(',');
    }
    console.log(justNumbers('10dsdsad2, 3, dsad8'))

    console.log('\nEntrada do usuário limpa. Somente números:');
    var numbers = justNumbers(userEntry);
    console.log(numbers);
    
    console.log('\nSomar números entrados pelo usuário:')
    console.log(sum.apply(sum, numbers));

})()