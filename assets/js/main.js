// console (We use to debug and also to print)
console.log("Hello world")
console.error("first")
console.warn("hey be careful")
console.table({a:Nathaniel, b:Nosa});

// console.log(Global declaration "a,b,c")
// USING LET & CONST
// let firstName='Nathaniel';
// firstName='Adeoye';

// const lastName='Nosa'

// console.log(firstName);
// console.log(lastName);

// DATATYPES
// Premitive Datatypes

// string (can either be in a double quote or sngle quote)
// let val;

// let firstName='Nathaniel';
// val= firstName;
// console.log(val);

// // number
// let age=25;
// val=age;
// console.log(val);

// // number
// let salary=3.5
// val=salary;
// console.log(val)

// // boolean
// let isGood=true;
// val=isGood;
// console.log(val)

// // undefined
// let healthIssue;
// val = healthIssue;
// console.log(val)

// // null
// let cooking =null;
// val = cooking;
// console.log(val)

// // symbol
// let sym =Symbol()
// val=sym
// console.log(val)

// CONCATENATION
// let firstName = 'Nathaniel';
// let lastName = 'Nosa'
// let age = 25;

// console.log('My full name is '+firstName +" "+lastName + " i am" + " " + age + " years old");

// template literal/string
// console.log('my full name is ${firstName} ${lastName} and i am ${age} years old');

// console.log(firstName + " " +lastName + " " +age);

// STRING
let firstName= "Nathanel";

console.log(firstName.length);
console.log(firstName.replace('Nathaniel','Adura'));
console.log(firstName.charAt(6));
console.log(firstName.toUpperCase());

// STRING
console.log(firstName.toUpperCase(2));
console.log(firstName.toUpperCase().charAt(2));
console.log(firstName.charAt(2).toUpperCase());
console.log(firstName.slice(0,4));
console.log(firstName.substring(0,4));

// REFERENCE DATATYPES
// ARRAY
// let fruits =Array('apple','orange','mango','banana');
let fruits = ['apple','orange','mango','banana']
console.log(fruits[0]);
console.log(fruits[1]);
let number = [1,2,3,4,5,6,7,8,10,11,20,31,32];
console.log(number[5]);
let mix = ['mango',5,true,null];
let fname = 'Nathaniel';
let val;
// mix.push('wisdom');
// mix.push('uche')
// mix.push(28)
// console.log(mix);

// console.log(fruits);
// console.log(number);
// console.log(mix);

// properties and method
// console.log(fruits.length);
// fruits.push('grape');
// fruits.unshift('african star')
// fruits.pop();
// fruits.shift();

// val = fruits. includes('grapes');
// val = fruits.slice(0,2)
// val = fruits.reverse()
// val = fruits.sort()
// val = number.sort()
// val = fruits.indexof('mango')
// console.log(fruits);
// console.log(val);
// console.log(Array.isArray(fname));

// const person ={
//     firstName : "Jane"
//     lastName : 'Uche'
//     age : 23,
//     hobbies : ['read','eat','care','keypad warrior'],
//     address :{
//         state: 'Anambra',
//         city: 'oka'
//     },
//     dob: new Data()
// }

// console.log(person);
// console.log(person.lastName);
// console.log(person.hobbies);
// // console.log(person.hobbies.slice(2,3));
// console.log(person.hobbies[2]);
// console.log(person.address.city);
// console.log(person.dob);

// let ARRAY = [
//     {
//         id:1,
//         firstName: "Adura",
//         age: 20,
//         isGraduated: true,
//     },
//     {
//         id:2,
//         firstName: "Adura",
//         age:20,
//         isGraduated: true,
//     },
//     {
//         id:3,
//         firstName: "Adura",
//         age: 20,
//         isGraduated: true,
//     },
//     {
//         id:4,
//         firstName: "Adura",
//         age: 20,
//         isGraduated: true,
//     },
//     {
//         id:5,
//         firstName: "Adura",
//         age: 20,
//         isGraduated: true,
//     },
// ] 

// CONDITION
// if
let x = '5';
if(x == 6){
    console.log('correct');
}

//  if else
// if(x === 8){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// // explaining loose and tight comparison
// if(x == 5){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }
// if(x === 5){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// multiple conditions
// else if

// WEATHER APP
// let weather = prompt('Enter weather(opt: rain | sunny | snow):').toLowerCase();

// if(weather === 'rain'){
//     console.log('UMBRELLA');
// }else if(weather === 'sunny'){
//     console.log('LIGHT CLOTH');
// }else if(weather === 'snow'){
//     console.log('HEAVY CLOTH');
// }else{
//     console.log('INVALID INPUT');
// }

// let x = 10;
// let y = 20;
// and operator (AND)
// if(x > 5 && y > 15){
//     console.log('YES');
// }else{
//     console.log('NO');
// }


// // TERNARY 
// x > 5 && y > 15 ? console.log('YES') : console.log('NO');

// x === 5 ? console.log('yes') : console.log('no');

// // SWITCH
// let weather = 'SNOW'

// switch((weather).toLowerCase()){
//     case 'rain':
//         console.log('UMBRELLA');
//         break;
//     case 'sunny':
//         console.log('LIGHT CLOTH');
//         break;
//     case 'snow':
//         console.log('HEAVY CLOTH');
//         break;
//     default:
//         console.log('INVALID SELECTION');                
// }

// FUNCTION

// function expression
// let sayHello = function(){
//     console.log('hello how are you');
// }
// sayHello();

// // function declaration
// function addNum(){
//     console.log('2+3 = 5');
// }
// addNum();

// // arrow function
// let myName = ()=>{
//     console.log('how do you do');
// }

// // myName()

// function addNum(){
//     console.log(2 + 4);
// }
// addNum()

// // function with parameter or argument
// function greet(name){
//     console.log(`good morning ${name}`);
// }
// greet('Nathaniel');

// function addNum(num1,num2){
//     console.log(num1 + num2);
// }
// addNum(5,6)

// // function with default parameter or argument
// function greets(name='Nosa'){
//     console.log(`hello, how are you ${name}`);
// }
// greets()
// function addNums(num1=7,num2){
//     console.log(num1 + num2);
// }
// addNums(undefined,6)
// function hello(name = 'Clinton'){
//     console.log(`good morning my brother ${name}`);
// }
// hello('precious')

// // RETURN IN A FUNCTION

// let sayHello = function(){
//     return 'hello how are you';
// }
// console.log(sayHello());

// function greet(name){
//     return (`good morning ${name}`);
// }
// console.log(greet('Nathaniel'));

// function greets(name='Nosa'){
//     return `hello, how are you ${name}`;
// }
// console.log(greets());

// // OOP
// // 1. Using Prototype (ESS)

// function person(fname,lname,age,gender,dob){

//     this.fname = fname;
//     this.lname =lname;
//     this.age = age;
//     this.gender = gender;
//     this.dob = new Date(dob)

//     this.getFullYear = function(){
//       return this.dob.getFullYear()
//  }
//     this.getFullName = function(){
        // return this.dob.getFullYear()
// }
// this.getFullName = function(){
//     return ${this.fname} ${this.lname}
// }

// person.prototype.getFullYear = function(){
//     return this.dob.getFullYear()
// }
// person.prototype.getFullName = function(){
//     return `${this.fname} ${this.lname}`
// }

// initialize a person Object
// let p1 = new person('joe', 'adeywmi',24, 'male', April-14-1999');

// let p2 = new person('joe', 'jane', 23, 'female', 'sep-11-1995');

// console.log(p1);
// console.log(p1.dob);
// console.log(p2)
// console.log(p2.getFullYear());
// console.log(p2);
// console.log(p1.getFullName());

// Ex 2
// function car(color,name,mdel){
//     this.color = color;
//     this.name = name;
//     this.model = model;
// }

// car.prototype.carspeed =function(speed){
//     return ${this.name} run at ${speed} km/hr;
// }

// initialize a car object

// let c1 = new car('red','venza',2010);
// let c2 = new car('blue','benz',2013);

// console.log(c1);
// console.log(c1.carspeed(300));
// console.log(c2);
// console.log(c2.carspeed(800));

// USING CLASS (E56)
// class cars{
//     constructor(color,name,model){
//         this.color =color;
//         this.color =color;
//         this.model =model;
//     }
//     speedcar= function(speed){
//         return `${this.name} run at ${speed} km/h`
//     }
// }

// initialize a car object

// let c3 = new cars('green','venza',2010);
// let c4 =new cars('black','benz',2013);

// console.log(c3);
// console.log(c4);

// console.log(c4.speedcar(650));


// // DOM (Document Object Model)
// console.log();