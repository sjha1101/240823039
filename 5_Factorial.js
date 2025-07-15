//To check the number is factorial or not
function factorial(n) {
    let res = 1;
    for (let i = 1; i <= n; i++){
        res *= i;
    }
    return res;
}
console.log(factorial(5))