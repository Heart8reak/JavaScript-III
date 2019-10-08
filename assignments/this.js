/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The function called in the global scope 
* 2. The function called as a method, obj.func()
* 3. The constructor function that returns a new object
* 4. The function called by call(), apply(), or bind()
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
}
sayName("Carlos");


// Principle 2

// code example for Implicit Binding

const family = {
    name: 'Carlito',
    food: 'pizza',
    cook: function () {
        return `${this.name} loves to cook ${this.food}`
    }
}

console.log(family.cook());

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hola';
    this.greeter = greeter;
    this.speak = function () {
        console.log(`${this.greeting} ${this.greeter}`);
        console.log(this);
    };
}

const keishy = new CordialPerson('Zaniya');
const zaniya = new CordialPerson('Keishy');
const carlito = new CordialPerson('Carlito');
const calvin = new CordialPerson('Calvin');

keishy.speak();
zaniya.speak();
carlito.speak();
calvin.speak();

// Principle 4

// code example for Explicit Binding

const daughter2 = {
    name: 'Keishlyann'
}

const daughter1 = {
    name: 'Zaniya'
}

const skills = [
    "Volleyball",
]

function introduction(params) {
    return `Hello, I am ${this.name}, my father's daughter and my skills are: ${params}`;
}

console.log(introduction.call(daughter1, skills));


console.log(introduction.call(daughter2, skills));