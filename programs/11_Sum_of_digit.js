//Sum of digit
var a = 123
sum = 0
var str = a.toString();
for(let i = 0;i<str.length;i++){
    sum+=Number(str[i])
}
console.log(sum)