/*

Implement your own version of the built-in array map function.

Yours will take in two arguments. 
The first will be an array to map and the second will be a
callback function. The function will return a new 
array based on the results of the callback function.

*/

var words = ["ground", "control", "to", "major", "tom"];

var wordLengths = words.map(function(word) {
  return word.length;
});

var wordUpperCase = words.map(function(word) {
  return word.toUpperCase();
});

var wordArray = words.map(function(word) {
  return word.split('').reverse().join('');
});

console.log(wordLengths, wordUpperCase, wordArray);

/*
[6, 7, 2, 5, 3]

[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
*/