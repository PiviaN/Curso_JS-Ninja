(function() {
    'use strict';

    var $input = document.querySelector('[data-js="input"]');
    var $buttonStart = document.querySelector('[data-js="buttonStart"');
    var $buttonStop = document.querySelector('[data-js="buttonStop"');
    var $buttonReset = document.querySelector('[data-js="buttonReset"');

    var counter = 0;
    var timeout;
    
    $buttonStart.addEventListener('click', startCounting, false);
    $buttonStop.addEventListener('click', stopCounting, false); 
    $buttonReset.addEventListener('click', resetCounting, false);

    function startCounting() {
        $input.value = counter++;
        timeout = setTimeout(startCounting, 1000);
    }

    function stopCounting() {
        clearTimeout(timeout);
    }

    function resetCounting() {
        $input.value = 0;
        stopCounting();
    }
    

})()