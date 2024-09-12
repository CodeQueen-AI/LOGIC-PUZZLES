//Swap Two Variables Without a Temporary Variable
let a = 10
let b = 20
a = a + b //10 + 20 = 30
b = a - b //10 - 20 = 10
a = a - b //30 - 10 = 20
console.log(`a = ${a} , b = ${b}`);

//Largest of Three Variables
let num = 10
let num1 = 20
let num2 = 30
let largest = num
if(num1 > largest){
    largest = num1
}if(num2 > largest){
    largest = num2
}
console.log(largest);

//Convert Celsius Into fahrenheit by using formula
let Celsius = 25;
let Fahrenheit = (Celsius * 9 / 5) + 32
console.log('Temperature in fahrenheit:' , Fahrenheit);

//convert Fahrenheit Into Celsius
let fahrenheit: number = 32;
let celsius: number = (fahrenheit - 32) * 5/9;
console.log(`Celsius: ${celsius}`); // Output: Celsius: 0

//Check Even or Odd
let number = 8
if(number % 2 === 0){
    console.log(number, 'is Even');
}
else{
    console.log(number, 'is Odd');
}

//Check Number is Positive , Negative and Zero
let num3 = 5
if(num3 > 0){
    console.log('Positive');
}else if(num3 < 0){
    console.log('negative');
}else{
    console.log('Zero');
}

//Perimeter Of Circle
let radius = 4
let Perimeter = 2 * Math.PI * radius
console.log(Perimeter);

//Converts Days into years , Months and days
let days = 500;
let years = Math.floor(days / 365)
let remaingdays = days % 365
let month = Math.floor(remaingdays / 30)
remaingdays = remaingdays % 30
console.log("Years:" , years , "Months:" , month , "Days:",days);

//Number is Divisible by 3 and 5
let number1 = 30;
if(number1 % 3 === 0 && number1 % 5 === 0){
    console.log(number1 , 'id Divisible');
}else {
    console.log('Not Divisible');
}

//Average Of numbers 
let num4 = 30
let num5 = 40
let Average = (num4 + num5) / 5
console.log(Average);

//Sum of Even Numbers Between 1 and 100
let even : number = 0;
for(let i = 2; i <=100 ; i += 2){
    even += 1
}
console.log('Sum of Even Number is' , even);

//Counts Digits in a Number 
let num6: number = 12345; 
let digit: number = 0;
while (num6 > 0) {
    num6 = Math.floor(num6 / 10); 
    digit++;
}
console.log(`Number of digits: ${digit}`);

//Reverse a Number 
let num7: number = 1234; 
let reversed: number = 0;
while (number > 0) {
    let digit1: number = number % 10; 
    reversed = reversed * 10 + digit1; 
    num7 = Math.floor(num7 / 10); 
}
console.log(`Reversed number: ${reversed}`);

//Reverse a string
let names: string = "Codequeen";
let reversednames: string = "";
for (let i = names.length - 1; i >= 0; i--) {
    reversednames += names[i];
}
console.log(reversednames); 

//Sum of Array Elements
let arr: number[] = [1, 2, 3, 4, 5];
let num8: number = 0;
for (let i = 0; i < arr.length; i++) {
    num8 += arr[i];
}
console.log(num8); // Output: 15

//Compare Two Strings
let str1 : string = 'Code'
let str2 : string = 'Queen'
if(str1 === str2){
    console.log('Strings are Equal');
}else{
    console.log('Strings are Not Equal');
}

//Smallest Number In a Array
let array: number[] = [4, 2, 9, 1, 5];
let small: number = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] < small) {
        small = array[i];
    }
}
console.log(`Smallest number: ${small}`); 

//Last Element of An array
let arr1: number[] = [10, 20, 30, 40];
let lastelement: number = arr1[arr1.length - 1];
console.log(`Last element: ${lastelement}`); 

//Print Number In Reverse Order
for (let i = 10; i >= 1; i--) {
    console.log(i); 
}

//Multiply All Elements in an Array
let arr2: number[] = [2, 3, 4];
let product: number = 1;
for (let i = 0; i < arr2.length; i++) {
    product *= arr2[i];
}
console.log(`Product: ${product}`); 

//Average of Array Elements
let arr3: number[] = [2, 4, 6, 8];
let sum: number = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
let average: number = sum / array.length;
console.log(`Average: ${average}`);

//Count Character in a Strings
let name1: string = "Hello";
let count: number = name1.length;
console.log(`Character count: ${count}`);

//Converts minute to Seconds
let minutes: number = 5;
let seconds: number = minutes * 60;
console.log(`Seconds: ${seconds}`); 

//Print the First 10 Square Numbers
for (let i = 1; i <= 10; i++) {
    let square: number = i * i;
    console.log(square); 
}

//Multiply elements of an Array
function multiplyArray(arr: number[]): number {
    let product: number = 1;
    for (let num of arr) {
        product *= num;
    }
    return product;
}
console.log(multiplyArray([2, 3, 4])); 

//Maximum Value in an Array 
function findMax(arr: number[]): number {
    return Math.max(...arr);
}

console.log(findMax([1, 3, 2, 5, 4])); 

//Number is Prime Using a Function
function isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); 

//Add a Property to an Object
let car = { make: "Toyota", model: "Corolla" };
function addProperty(obj: object, key: string, value: any): void {
    obj[key] = value;
}
addProperty(car, "year", 2020);
console.log(car); 

//Calculate the Sum of Object Values
let scores = { math: 90, science: 85, history: 78 };
function sumValues(obj: object): number {
    let sum: number = 0;
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            sum += obj[key];
        }
    }
    return sum;
}
console.log(sumValues(scores));

//Difference Between Two Dates Using a Function
function dateDifference(date1: Date, date2: Date): number {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
}
console.log(dateDifference(new Date("2024-08-01"), new Date("2024-08-21"))); 

//Filter Even Numbers from an Array
function filterEvenNumbers(arr: number[]): number[] {
    return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5])); 

//Longest Word in an Array Using a Function
function longestWord(words: string[]): string {
    return words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

console.log(longestWord(["apple", "banana", "cherry"])); 

//Convert an Object to an Array of Keys
let person = { name: "Alice", age: 30, city: "Wonderland" };
function getObjectKeys(obj: object): string[] {
    return Object.keys(obj);
}
console.log(getObjectKeys(person)); 

//Numbers in Ascending Order
let numbers = [5, 3, 8, 1, 2];
numbers.sort((a, b) => a - b);
console.log(numbers); 

//Merge Two Arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = array1.concat(array2);
console.log(mergedArray); 

//String Starts with a Specific Letter
function startsWith(str: string, letter: string): boolean {
    return str.startsWith(letter);
}
console.log(startsWith("Hello", "H")); 

//Sum of Odd Numbers in an Array
function sumOddNumbers(arr: number[]): number {
    return arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
}
console.log(sumOddNumbers([1, 2, 3, 4, 5])); 

//Array of Square Numbers
function createSquaresArray(n: number): number[] {
    return Array.from({ length: n }, (_, i) => (i + 1) ** 2);
}
console.log(createSquaresArray(5)); 

//Remove Duplicate Values from an Array
function removeDuplicates(arr: number[]): number[] {
    return Array.from(new Set(arr));
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); 

//Convert an Array of Numbers to Strings
function convertToStrings(arr: number[]): string[] {
    return arr.map(num => num.toString());
}
console.log(convertToStrings([1, 2, 3])); 

//Two Arrays Are Equal
function arraysEqual(arr1: number[], arr2: number[]): boolean {
    return arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);
}
console.log(arraysEqual([1, 2, 3], [1, 2, 3])); 

//Second Largest number in an array
function secondLargest(arr: number[]): number {
    const unique = [...new Set(arr)];
    unique.sort((a, b) => b - a);
    return unique[1];
}
console.log(secondLargest([10, 5, 20, 20, 30]));

//Number is Even or Odd using function
function isEven(num: number): boolean {
    return num % 2 === 0;
}
console.log(isEven(4)); 
console.log(isEven(7)); 

//Minimum Value in an Array
function findMin(arr: number[]): number {
    return Math.min(...arr);
}
console.log(findMin([5, 3, 9, 1])); 

//Remove all falsy values from array
function removeFalseyValues(arr: any[]): any[] {
    return arr.filter(Boolean);
}
console.log(removeFalseyValues([0, 1, false, 2, '', 3])); 

//Common Elements Between Two Arrays
function commonElements(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(value => arr2.includes(value));
}
console.log(commonElements([1, 2, 3], [2, 3, 4])); 

//Merge two Objects
function mergeObjects(obj1: object, obj2: object): object {
    return { ...obj1, ...obj2 };
}
console.log(mergeObjects({ a: 1 }, { b: 2 })); 

//Countdown Timer
function countdown(seconds: number): number[] {
    return Array.from({ length: seconds + 1 }, (_, i) => seconds - i);
}
console.log(countdown(5)); 

//Create a MarkSheets
let totalmarks = 150
let obtainedmarks = 132
let percentage = obtainedmarks/totalmarks*100
let grade = percentage
if(grade >= 80){
    console.log("A1");
}
else if(grade >= 70){
    console.log("A");
}
else if(grade >= 60){
    console.log("B");
}
else if(grade >= 50){
    console.log("C");
}
else if(grade >= 40){
    console.log("D");
}
else if(grade >=33){
    console.log("E");
}
else{
    console.log("Fail");
}

//Convert Number into String
let num9 : number = 4
switch(num9) {
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
         console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    default:
        console.log("number is not between of 0 - 5");
}
