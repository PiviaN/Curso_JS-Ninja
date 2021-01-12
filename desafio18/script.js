 (function() {
    'use strict';

    function cleanCPF(cpf) {
        return cpf.replace(/\D/g, '' );    
    }

    var cpfs = [
    '049-214 3421-1',
    '210.458.522-05',
    '735 500 794 - 22',
    '101.123-131x32'
    ];
    
    console.log('Limpando CPFS:');
    cpfs.forEach(function(item) {
        console.log(cleanCPF(item));
    })

    cpfs.forEach(function(cpf) {
        console.log(cleanCPF(cpf).replace(/(\d\d\d)(\d\d\d)(\d\d\d)(\d\d)/, '$1.$2.$3-$4'));
    })

    console.log('\nMatch com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.":');
    console.log('Os meses de janeiro, junho e julho começam com a letra j.'.match(/ju(n|l)ho/g));

    console.log('\nMatch com a abertura de uma tag HTML:');
    console.log('<div<section><blockquote>Texto <img /></blockquote></section></div>'.match(/<\w+>/g));

    console.log('\nMatch com tags HTML vazias (abertura e fechamento da tag):');
    console.log('<div><ul><li></li><li></li><li><span></span></li></ul></div>'.match(/<\w+><\/\w+>/g));

    console.log('\nFazer replace dos textos das tags:');
    console.log('<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>'.replace(/(<(\w+)>)([^<]+)(<\/\w+>)/g, '$10 texto dentro da tag "$2" é "$3"$4\n' ));
    


 })()