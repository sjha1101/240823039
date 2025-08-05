//TO find armstrong number example: 153 => 1cube + 5cube + 3cube =>1+125+27=>153 so it is an armstrong.Sum equals original number → Armstrong number!

var a = 153
var sum = 0
var str = a.toString();
var n = str.length;
for(var i = 0;i<n;i++){
    var digit = parseInt(str[i]);
    sum +=Math.pow(digit,n);
}
if(sum === a){
    console.log(a +" This number is an armstrong number.")
}
else{
    console.log(a +" This is not an armstrong number.")
}
