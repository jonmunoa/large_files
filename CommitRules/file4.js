function greet(name) {
    return `Hello, ${name}!`;
}

function farewell(name) {
    return `Goodbye, ${name}!`;
}

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
}

function getCurrentDate() {
    const now = new Date();
    return now.toLocaleDateString();
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(number) {
    return number % 2 === 0;
}

function isOdd(number) {
    return number % 2 !== 0;
}

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(greet("World"));
console.log(farewell("World"));
console.log(`Current Time: ${getCurrentTime()}`);
console.log(`Current Date: ${getCurrentDate()}`);
console.log(`Random Number between 1 and 10: ${getRandomNumber(1, 10)}`);
console.log(`Is 4 even? ${isEven(4)}`);
console.log(`Is 5 odd? ${isOdd(5)}`);
console.log(`Factorial of 5: ${factorial(5)}`);
console.log(`Fibonacci of 7: ${fibonacci(7)}`);
