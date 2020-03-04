// console.log('hello');


// function DECLARATION


//        name        arguments
// function square(a,b) {
//     console.log(a*b);
// }

// square(2,2);
// square(5,5);



// function checkArg() {
//     console.log(arguments);
// }

// checkArg('John', 20);
// Лучше этим arguments не пользоваться (так как задавать конкретнее)


//      return

// function square(a,b) {
//     return a * b;
//     console.log('Doesnt work');
// }

// const firstResult = square(2,2); 
// const secondResult = square(5,5);

// console.log(firstResult, secondResult);


// example 1
// function lineShortener (str, chars = 5) {
//     let arr = []
//     for(let i=0; i <= chars; i++) arr.push(str[i]);
//     return arr.join('')+'...';
// }

// const LongStr = 'Its very long string';
// const shorStr = lineShortener(LongStr);
// const secondShortStr = lineShortener('Hello its me');

// console.log(shorStr, secondShortStr);


// //  example 2
// function isEmptyArray(value) {
//     return Array.isArray(value) && value.length === 0;
// }

// console.log(isEmptyArray({name: 'Jack' }));
// console.log(isEmptyArray([15]))


// FUNCTION EXPRESSION
// const multiple = function(a,b){
//     console.log(a + 2, b * 2);
// }

// multiple(3,6);


//  Methods

// const person = {
//     name: 'Jack',
//     birthYear: 1980,
//     getAge: function() {
//         // console.log(this);
//         return 2020 - this.birthYear;
//     },
//     sayHello: function() {
//         console.log(this.name + 'Said hello') ;
//     },
//     changeName: function(newName) {
//         if (typeof newName !== 'string') {
//             console.error('To change the name, enter the line')
//             return;
//         }

//         this.name = newName
//     }
// }

// const ageOfPerson = person.getAge();

// // console.log(ageOfPerson);
// // person.sayHello();
// person.changeName('Jim');
// console.log(person.name);


// function scope() {
//     let firstName = 'Jack';
//     let lastName = 'Daniels';
//     console.log(firstName, lastName);
// }

// function scope2() {
//     let firstName = 'Jim';
//     let lastName = 'Bean';
//     console.log(firstName, lastName);
//     return { firstName, lastName }
// }

// scope();
// const firstNameScope2 = scope2();

// console.log(firstNameScope2);