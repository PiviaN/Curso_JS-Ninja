(function() {
    'use strict';

    const $input = document.querySelector('[data-js="input"]');
    
    const $buttonsNumber = document.querySelectorAll('[data-js="buttonNumber"]');

    const $buttonsOperation = document.querySelectorAll('[data-js="buttonOperation"]');
    
    const $buttonResult = document.querySelector('[data-js="buttonResult"]');
    const $buttonClear = document.querySelector('[data-js="buttonClear"]');

    $buttonClear.addEventListener('click', clearInput, false);
    $buttonResult.addEventListener('click', makeOperation, false);

    function clearInput() { $input.value = ''; }
    
    $buttonsOperation.forEach(function(elem) {
        elem.addEventListener('click', handleClickNumber, false);
    });
    
    $buttonsOperation.forEach(function(elem) {
        elem.addEventListener('click', validateSignal, false);
    });

    $buttonsNumber.forEach(function(elem) {
        elem.addEventListener('click', handleClickNumber, false);
    });

    function handleClickNumber() { $input.value += this.value; }
   
    function validateSignal() {
        if ( $input.value.match(/\--/g) ) 
        $input.value = $input.value.replace('-', $input.value = '')
        if ( $input.value.match(/\+\+/g) ) 
        $input.value = $input.value.replace('+', $input.value = '')
        if ( $input.value.match(/\*\*/g) ) 
        $input.value = $input.value.replace('*', $input.value = '')
        if ( $input.value.match(/\/\//g) ) 
        $input.value = $input.value.replace('/', $input.value = '')
        if ( $input.value.match(/\+-/g) ) 
        $input.value = $input.value.replace('+', $input.value = '')
        if ( $input.value.match(/\+\*/g) ) 
        $input.value = $input.value.replace('+', $input.value = '')
        if ( $input.value.match(/\+\//g) ) 
        $input.value = $input.value.replace('+', $input.value = '')
        if ( $input.value.match(/\-\+/g) ) 
        $input.value = $input.value.replace('-', $input.value = '')
        if ( $input.value.match(/\-\*/g) ) 
        $input.value = $input.value.replace('-', $input.value = '')
        if ( $input.value.match(/\-\//g) ) 
        $input.value = $input.value.replace('-', $input.value = '')
        if ( $input.value.match(/\*\+/g) ) 
        $input.value = $input.value.replace('*', $input.value = '')
        if ( $input.value.match(/\*\-/g) ) 
        $input.value = $input.value.replace('*', $input.value = '')
        if ( $input.value.match(/\*\//g) ) 
        $input.value = $input.value.replace('*', $input.value = '')
        if ( $input.value.match(/\/\+/g) ) 
        $input.value = $input.value.replace('/', $input.value = '')
        if ( $input.value.match(/\/\-/g) ) 
        $input.value = $input.value.replace('/', $input.value = '')
        if ( $input.value.match(/\/\*/g) ) 
        $input.value = $input.value.replace('/', $input.value = '')
    }
    
    function makeOperation() {
        let inputlength = $input.value.length;

        let indexOfPlus = $input.value.indexOf('+');
        let indexOfLess = $input.value.indexOf('-');
        let indexOfMult = $input.value.indexOf('*');
        let indexOfDiv = $input.value.indexOf('/');

        if ($input.value.match(/\+/g)) 
        $input.value = parseFloat( $input.value.substring('0' , indexOfPlus) ) +  
        parseFloat ( $input.value.substring(indexOfPlus + 1, inputlength ) );

        if ($input.value.match(/\-/g)) 
        $input.value = parseFloat ($input.value.substring('0', indexOfLess) ) - 
        parseFloat ( $input.value.substring(indexOfLess + 1, inputlength ) );

        if ($input.value.match(/\//g)) 
        $input.value = parseFloat( $input.value.substring('0', indexOfDiv) ) /
        parseFloat ( $input.value.substring(indexOfDiv + 1, inputlength ) );

        if ($input.value.match(/\*/g)) 
        $input.value = parseFloat( $input.value.substring('0', indexOfMult) ) *
        parseFloat ( $input.value.substring(indexOfMult + 1, inputlength ) );
    }
        
    
})()