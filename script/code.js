// Factory function
// function personDetails(name, surname, age) {
//     return {
//         name,
//         surname,
//         age,
//         display: ()=> {
//             console.log(`
//             Name: ${name}
//             Surname: ${surname}
//             Age: ${age}`);
//         }
//     }
// }
// let person1 = personDetails('Peter', 'Henk', 20);
// let person2 = personDetails('Lerato', 'Mayer', 30);
// person1.display();
// console.log(person1);
// console.log(person2);
// person2.display();
// console.log("==============");
// let person2 = personDetails('Lerato', 'James', 25);
// Object.prototype.greeting = function() {
//     console.log(`Hello there, my name is ${person2.name}`);
// }
// console.log(person2);
// console.log(Object.prototype === person2.__proto__);
// constructor function
// function PersonDetails(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
// }
// PersonDetails.prototype.display = function () {
//     console.log(`
//     Name: ${this.name}
//     Surname: ${this.surname}
//     Age: ${this.age}`);
// }
// let person1 = new PersonDetails('Lerato', 'Mike', 30);
// let person2 = new PersonDetails('Tebogo', 'James', 29);
// console.log(person1);
// console.log(person2);
// person1.display();
// person2.display();
// Class Person
class Person{
    // Attribute declaration
    #name;
    #surname;
    #age;
    constructor(name, surname, age) {
        this.#name = name;
        this.#surname = surname;
        this.#age = age
    }
    display() {
        console.log(`
        Name: ${this.#name}
        Surname: ${this.#surname}
        Age: ${this.#age}`);
    }
}
let person1 = new Person('Peter', 'Henk', 20);
person1.display();







