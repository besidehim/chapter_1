//  Number # 15

// const findLongestWord = function(str) {
//     let arrStr = str.split(' ');
//     let wordLength = 0;
//     let longestWord;
  
//     for (i = 0; i < arrStr.length; i++) {
//       wordLength = arrStr[1].length;
  
//       if (arrStr[i].length > wordLength) {
//         longestWord = arrStr[i];
  
//         return longestWord;
//       }
  
//     }
// }
// console.log(findLongestWord('Usa Canada Russia Kyrgyzstan'));


// это правильный варик

// let country = [
//     'Kyrgyzstan',
//     'Russia',
//     'USA',
//     'Italy'
// ];

// country.sort(function(a,b) {
//     return a.length - b.length
// });

// console.log(country);
// console.log(country[0], country[country.length - 1]);






// Number # 16

// function countWord(word, letter) {
//     if(!letter)
//         return 0;
//     let res = 0, index = 0;
//     while((index = word.indexOf(letter)) >= 0) {
//         word = word.substring(index + letter.length);  
//         res++;
//     }
//     return res;
// }
// console.log(countWord('Favre', 'a'));






// let arr = [
//     ["a", "b", "c"],
//     ["d", "e", "f"],
//     ["g", "h", "i"]
// ];

// // 0 2
// // 1 1
// // 2 0
// for(let i=0; i < arr.length; i++ ) {
//     console.log(arr[i][arr.length-(1+i)])
// }






// Number # 17

// const num = +prompt('Input number');

// const factorial = function(a) {
//     let result = 1;
//     for (let i = 1; i <= a; i++) {
//         result *= i;
//     }
//     return result;
// }

// alert(factorial(num));


// let string = prompt('input word');
// let letter = prompt('input ler');

// const quantity = function(a,b) {
//     let n = 0;
//     for(let i=0; i < a.length; i++){
//         if(a[i] === b)  {
//             n++
//         }
//     }
//     return n;
// }
// alert(quantity(string, letter));


