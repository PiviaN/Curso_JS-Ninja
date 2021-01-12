(function(win, doc) {

    var $input = doc.querySelector('[data-js="input"');
    var $input2 = doc.querySelector('[data-js="input2"');
    var $input3 = doc.querySelector('[data-js="input3"');
    
    var $textarea = doc.querySelector('[data-js="text-area"');
    var $textarea2 = doc.querySelector('[data-js="text-area2"');

    var $buttonRadio = doc.querySelector('[data-js="button-radio"');
    var $checkbox = doc.querySelector('[data-js="checkbox"');

    function eventAction(element, event, callback) {
        element.addEventListener(event, callback);
    }
    
    eventAction($input, 'keyup', function() {
        console.log('Evento keyup acionado!');
    })

    eventAction($input2, 'focus', function() {
        console.log('Evento focus acionado!');
    })

    eventAction($input3, 'blur', function() {
        console.log('Evento blur acionado! Perdeu o foco!');
    })
    
    eventAction($textarea, 'scroll', function() {
        console.log('Evento scroll acionado!');
    })

    eventAction($textarea2, 'copy', function() {
        console.log('Evento copy acionado!');
    })

    eventAction($textarea2, 'paste', function() {
        console.log('Evento paste acionado!');
    })

    eventAction($textarea2, 'cut', function() {
        console.log('Evento cut acionado!');
    })

    eventAction($buttonRadio, 'mousedown', function() {
        console.log('Evento mousedown acionado!');
    })
    
    eventAction($buttonRadio, 'mouseenter', function() {
        console.log('Evento mouseenter acionado!');
    })

    eventAction($buttonRadio, 'mouseleave', function() {
        console.log('Evento mouseleave acionado!');
    })

    eventAction($checkbox, 'dblclick', function() {
        console.log('Evento dblclick acionado!');
    })


})(window, document)