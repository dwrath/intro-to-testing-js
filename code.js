// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(input){
    return `Hello, World!`;
}

function isFive(input){
    if(typeof input == 'string'){
        return false
    }
    return input == 5;
}

function isEven(input){
    if(typeof input == 'string'){
        return false
    }
    return input % 2 ==0
}

function isVowel(char) {
    if(typeof char == 'number'){
        return false
    }
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U' || false;
}

function add(a,b){
    a = parseFloat(a)
    b = parseFloat(b)
    if(typeof a === 'string' || typeof b ===  'string'){
        return NaN
    }
return a + b
}
console.log(add())