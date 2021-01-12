(function() {
    'use strict';

    var text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 - Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro. ' 

    var changeName = `${text.replace(/Manuel Marques de Sousa/g, 'Pedro Vinícius Salgado Nepomuceno')}`;
    console.log('Adicionando seu nome no texto:', changeName); 
           
    console.log(`\nTrocando naturalidade: ${changeName.replace(/brasileiro/g, 'paulista')}`);

    console.log('\nTrocando números por -: ' + changeName.replace(/\d/g, '-'));

    console.log('\nTrocando de "D" a "h" por "0" -: ' + changeName.replace(/[D-Za-h]/g, 0));

    console.log('\nTrocando "A" e "a" por "4" ' + changeName.replace(/a/gi, '4'));

    console.log('\n"O Centauro de Luvas" em caixa alta: ' + 
    changeName.replace(/Centauro de Luvas/g, function(capturaTotal) {
        return capturaTotal.toUpperCase();
    }));

    function getMonthNumber(monthName) {
        var months = {
            janeiro: '01',
            fevereiro: '02',
            março: '03',
            abril: '04',
            maio: '05',
            junho: '06',
            julho: '07',
            agosto: '08',
            setembro: '09',
            outubro: '10',
            novembro: '11',
            dezembro: '12'
    };
    return months[monthName];
}

    console.log('O mês de março é representado pelo número', getMonthNumber('março') + '.');
    console.log('O mês de setembro é representado pelo número', getMonthNumber('setembro') + '.');
    console.log('O mês de dezembro é representado pelo número', getMonthNumber('dezembro') + '.');

    console.log('\nRegex que vai fazer o match com as datas do texto:');
    var regexDate = /(\d\d) de (junho|julho) de (\d\d\d\d)/;
    console.log(regexDate);

    console.log('\nReplace de datas:');
    
    function replaceDate(regex, day, month, year) {
        return day + '/' + getMonthNumber(month) + '/' + year;
    }

    console.log(text.replace(regexDate, replaceDate));
})()