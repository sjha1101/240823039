//Fibonacci_series IN JS 
// Define: generate the first n fibonacci number
// o/p: 0 1 1 2 3
// The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.
// So, the sequence looks like this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// Explanation:
// Start with 0 and 1. Next number = previous number + the one before that. Repeat.

let n = 5; 
let a = 0,b = 1;
for (let i = 1;i<=n;i++) {
    let fib =  a + b
console.log(a)
    a=b;
    b=fib;
} 