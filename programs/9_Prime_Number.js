//To check the number is prime or not
var a = 11;
j=0;
pri=0;
d=0;
for (let i=1;i<=a;i++) {
    if (a % i == 0) {
        console.log(i)
        d++
    }
}
console.log(d)

if (d<=2 && pri <= a) {
    console.log("It is an prime number.");
}else{
    console.log("It is not an prime number.");
}