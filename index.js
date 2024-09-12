//Swap Two Variables Without a Temporary Variable
var a = 10;
var b = 20;
a = a + b; //10 + 20 = 30
b = a - b; //10 - 20 = 10
a = a - b; //30 - 10 = 20
console.log("a = ".concat(a, " , b = ").concat(b));
//Largest of Three Variables
var num = 10;
var num1 = 20;
var num2 = 30;
var largest = num;
if (num1 > largest) {
    largest = num1;
}
if (num2 > largest) {
    largest = num2;
}
console.log(largest);
