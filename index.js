// code1: 10 using 7 and 3
let code1;
code1 = 7 + 3;

// code2: 40 using 3 numbers with subtraction and division
let code2 = 100 - 60 / 2;

// code3: 39 using modulo
let code3 = 40 % 41;

// message
let message = "The vault has been secured. The combination is:";

// codeA using concatenation
let codeA = code1 + "-" + code2 + "-" + code3;

// codeB using template literal
let codeB = `${code1}-${code2}-${code3}`;

// print to console
console.log(message);
console.log(codeA);
console.log(codeB);
