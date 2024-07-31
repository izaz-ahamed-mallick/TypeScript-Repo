"use strict";
// Basic Types
//Number,String,Boolean
let a;
a = "s";
let b;
b = 1;
let c;
c = false;
// Array
//Arr
let myArr;
myArr = [1, 2, 3, 4];
console.log(myArr);
//Tuple:-Fixed Size and location
let arr = [1, 5, "Sujan"];
// here we can put any type variable
let variable;
variable = 12;
variable = "syr";
//when we not sure type of variable
let vare;
//type Never when we used it next not not execute never this function not return anything ever;
function abcd() {
    while (true) { }
}
// abcd()
// console.log("hey"); // this code never execute
// we can say the function which type return
function returnN() {
    return 12;
}
returnN();
//void means function not return anything
function noReturn() {
    console.log("no Return");
}
let value = {
    name: "Burdwan",
    population: 12000,
    cities: 10,
};
let rt;
rt = 122;
let userAge;
userAge = 22;
let user;
user = "sujan";
let userDetails = {
    name: "izaz",
    age: 23,
    email: "izaz@iza",
};
let dabba = {
    weight: 23,
    color: "#FFFFF",
};
let age = 12;
let userN = {
    name: "sujan",
    age: 12,
    isAvialable: true,
};
let user2 = {
    name: "sujan",
    age: 12,
    isAvialable: true,
    email: "iza@f",
};
function userDet(user) {
    return user.email;
}
let ss = userDet(user2);
console.log(ss);
// class Pendrive {
//     company = "hp";
//     storage = "12gb";
//     data: Data = null;
//     putDetails(data: Data) {
//         this.data = data;
//     }
//     getDetails() {
//         console.log(this.data);
//     }
// }
// let pen = new Pendrive();
// pen.putDetails("12");
// pen.getDetails();
// constructor is a special method its first execute when we pass data use new className this data access through constructor
// class Pendrive {
//     public comapny: string;
//     public price: number;
//     constructor(name: string) {
//         this.comapny = name;
//     }
// }
// let p1 = new Pendrive("sandisk");
// class Earphones {
//     name: string;
//     price: number;
//     constructor(name: string, price: number) {
//         this.name = name;
//         this.price = price;
//     }
// }
// let ear = new Earphones("Noise", 1200);
// console.log(ear);
class Bottle {
    shape;
    constructor(shape) {
        this.shape = shape;
        this.shape = shape;
    }
}
let b1 = new Bottle("Square");
// Acess modifier :-public/private/protected
// public:its by default and we can modifie from outside
class Mobile {
    name = "Redmi";
    constructor() {
        console.log(this.name);
    }
}
let m1 = new Mobile();
m1.name = "Oppo";
// private: extended class not acess this/ we can use this value indside the class where we declare , we cant modifie value from outside
class UserAc {
    balance = 1200;
    getbalance() {
        return this.balance;
    }
}
let u1 = new UserAc();
// u1.balance = 12000; //error show
u1.getbalance(); //we can acess this data
// protected:use in this class where we declare and also acess when we extend to another class but we can't use outside
class UserAccount {
    balance = 12000;
}
class u2 extends UserAccount {
    getBalance() {
        console.log(this.balance);
    }
}
let u = new u2();
// for method
class privatee {
    balance = 12000;
    getVal(balance) {
        this.balance = balance;
    }
}
class meth extends privatee {
    getBalance() {
        console.log(this.balance);
    }
}
let pro = new meth();
// readonly:-only read no update
class Abcd {
    name;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}
let ne = new Abcd("Sujan");
// ne.getName();
//Getter/Setter
// Getter:-its act like a object / we can acces this get function like access object.
class getAb {
    username;
    constructor(username) {
        this.username = username;
        this.username = username;
    }
    get getName() {
        return this.username;
    }
    set setName(user) {
        this.username = user;
    }
}
let user1 = new getAb("Sujannn");
user1.setName = "izaz"; //set name here in setter
console.log(user1.getName); //get name from getter
//  i can't call as a function it acess like object
// Function
// void:-means function no  return;
//function():string:-means its return string
//function():number :-means its return number
//
// 2>  second is when we are taking parameter thats time we can write param types
//  like function(a:string,b:number){}
// Named Function
function Abb() {
    return "hello";
}
// console.log(Abb().includes("s"));
//Arrow func
const arro = () => { };
// Implicit return:we cant write function which type return its automatically set which item return;
//Explicit return :we can write which type return
// implicit:-
function implicit() {
    return 12;
}
//Explicit:-
function explicit() {
    return 12;
}
// Optional Parameters:here we can set paramter optional we can pass argument or not pass no problem;
// syntax
function optional(name, age, gender) {
    return { name, age, gender };
}
// console.log(optional("izaz", 26, "Male"));
// Default Param :-we can pass default params
function defaul(name = "default") {
    console.log(name);
}
// defaul("sujan");
//Rest params:similarly as we used in js but here must be write the type
function restParam(...rest) {
    console.log(rest);
}
restParam("sujan", "mallick", "uizaz");
// modules :-import/export
// basically import and export variable and acess into another file
// in normal we can see this result in node no browser for show result in browser we need a bundler
//Type Assertions:when we are doing dom manipulation thats time we can put the htmlElement type which element we acess;
const p = document.querySelector("p");
//Literal Types:
//String literal:clearly we can put value ;those value not chnage alltym put this variable not chng
let strLiteral;
strLiteral = "sujan";
//Number
let numLiteral;
numLiteral = 12;
//  Union
let uni;
// uni = 13; //we cant chng this because we are literally put value
//Generics in typeScript allow us to create reusable components or function that can work with multiple data types//
