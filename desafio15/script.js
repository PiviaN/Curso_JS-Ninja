(function() {

    class Person {
        constructor(name, lastName, age) {
            this.name = name;
            this.lastName = lastName;
            this.age = age;

            this.getFullName = function getFullName() {
                return this.name + ' ' + this.lastName;
            };
            this.getAge = function getAge() {
                return this.age;
            };

            this.addAge = function addAge() {
                this.age += arguments[0];
                return this;
            };
        }
    }
    
    var pedro = new Person('Pedro', 'Nepomuceno', 19);
    var delma = new Person('Delma', 'Salgado', 58);
    var rogerio = new Person('Rogério', 'Nepomuceno', 50);
    console.log('Novas pessoas criadas em Person:');
    console.log(pedro);
    console.log(delma);
    console.log(rogerio);

    console.log(`Nome das pessoas:
    ${pedro.getFullName()}
    ${delma.getFullName()}
    ${rogerio.getFullName()}`);

    console.log(`Idade das pessoas:
    ${pedro.getFullName()} tem ${pedro.getAge()} anos
    ${delma.getFullName()} tem ${delma.getAge()} anos
    ${rogerio.getFullName()} tem ${rogerio.getAge()} anos`);

    rogerio.addAge(5);
    pedro.addAge(1);
    delma.addAge(40);

    console.log(`Nova idade das pessoas:
    ${pedro.getFullName()} agora ${pedro.getAge()} anos
    ${delma.getFullName()} agora ${delma.getAge()} anos
    ${rogerio.getFullName()} agora ${rogerio.getAge()} anos`);

})()