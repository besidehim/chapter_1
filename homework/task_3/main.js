// Number #9

// let got = ['Targaryen', 'Stark', 'Lannister', 'Baratheon', 'Greyjoy']

// console.log(got);
// console.log(got[2]);
// console.log(got[1], got[got.length - 1]);
// console.log(got.shift());
// console.log(got);
// console.log(got.pop());
// console.log(got);



// Number #10


// for (let i=1; i<=100; i++) {
//     if(i % 2 == 0) {
//         console.log(i)
//     }
// }



// Number #11

// let FizzBuzz = []
// for (let i = 1; i <= 100; i++) {
//     FizzBuzz.push(i)
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('FizzBuzz')
//     } else if (i % 5 == 0) {
//         console.log('Buzz')
//     } else if (i % 3 == 0) {
//         console.log('Fizz')
//     } else {
//         console.log(i);
//     }
// }



// Number # 12

// var student = {
//     name: 'David',
//     sClass: 'VI',
//     age: 12
// }
// console.log(student.name)



// Number # 13

// var r = +prompt('Input Radius');
// var p = 3.1415;
// var s = p * r **2;
// var pr = 2 * p * r;
// alert(s.toFixed(2) + '\n' + pr.toFixed(2));

// Number #14

// let word = prompt("Input any word: ");
// const arr = [];
// for(let x=0; x <= word.length; x++) {
//     for(let y = x+1; y <= word.length; y++) {
//         arr.push(word.slice(x,y))
//     }
// }   console.log(arr)


// Additional task +

// Number#1

// let mod = []
// for (let i = 1; i <= 1000; i++) {
//     mod.push(i)
//     if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
//         console.log(i)
//     }
// }



//  Number #2

// let arr = [1,2,0,3,0,0,4,0,5]

// let odin = arr.filter(function(number) {return number != 0 });
// let dva = arr.filter(function(number) {return number === 0});

// console.log(odin.concat(dva));