//To do the sum of all natural number
function findSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++)
        sum = sum + i;
    return sum;
}
const n = 5;
console.log(findSum(n));