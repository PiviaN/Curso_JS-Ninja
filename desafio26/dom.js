(function() {

    class DOM {
        constructor(elements) {
            this.element = document.querySelectorAll(elements);
        }
        on(eventType, callback) {
            Array.prototype.forEach.call(this.element, function (element) {
                element.addEventListener(eventType, callback, false);
            });
        }
        off(eventType, callback) {
            Array.prototype.forEach.call(this.element, function (element) {
                element.removeEventListener(eventType, callback, false);
            });
        }
        get() {
            return this.element;
        };
        ForEach() {
            Array.prototype.forEach.apply(this.element, arguments);
        };
        map() {
            Array.prototype.map.apply(this.element, arguments);
        };
        filter() {
            Array.prototype.filter.apply(this.element, arguments);
        };
        reduce() {
            Array.prototype.reduce.apply(this.element, arguments);
        };
        reduceRight() {
            Array.prototype.reduceRight.apply(this.element, arguments);
        };
        every() {
            Array.prototype.every.apply(this.element, arguments);
        };
        some() {
            Array.prototype.some.apply(this.element, arguments);
        };
        isArray(param) {
            Object.prototype.toString.call(param) === '[object Array]';
        };
        isObject(param) {
            Object.prototype.toString.call(param) === '[object Object]';
        };
        isFunction(param) {
            Object.prototype.toString.call(param) === '[object Function]';
        };
        isNumber(param) {
            Object.prototype.toString.call(param) === '[object Number]';
        };
        isString(param) {
            Object.prototype.toString.call(param) === '[object String]';
        };
        isBoolean(param) {
            Object.prototype.toString.call(param) === '[object Boolean]';
        };
        isNull(param) {
            Object.prototype.toString.call(param) === '[object Null]'
            || Object.prototype.toString.call( param ) === '[object Undefined]';
        };
    }

    var $a = new DOM('[data-js="link"]');
    $a.on('click', function handleClick(e) {
        e.preventDefault();
        console.log('clicou');
        $a.off('click', handleClick);
    });

    console.log('Elementos selecionados:', $a.get());
    console.log($a + ' é filho de body?', $a.get()[0].parentNode === document.body);
    console.log($a.methodForEach());;

    
})()
