"use strict";
let num1 = 12;
let num2 = 13;
function addNum(num1, num2) {
    return num1 + num2;
}
console.log(addNum(num1, num2));
let message = "hello typescript";
// console.log(message.length);
let upperCaseLetter = message.toUpperCase();
console.log(upperCaseLetter);
let longText = "abcdefghijklmnopqrstuvwxyz";
let sortText = longText.slice(0, 10);
console.log(sortText);
let isEven = (num) => {
    return num % 2 === 0 ? true : false;
};
console.log(isEven(2));
function str(fname, lname) {
    return fname + " " + lname;
}
// console.log(str("sujan", "mallick"));
function calculateAverage(arr) {
    const sumOfArray = arr.reduce((acc, curr) => acc + curr, 0);
    return sumOfArray / arr.length;
}
// console.log(calculateAverage([1, 2, 3]));
const findMaxValue = (arr) => {
    return arr.reduce((acc, curr) => (acc < curr ? (acc = curr) : curr), 0);
};
console.log(findMaxValue([1, 2, 3, 4]));
const arr2 = [1, 2, "2", "sujan"];
const numm = [1, 2, 3, 4, 5];
const doubleNum = numm.map((cur) => cur * 2);
console.log(doubleNum.join(","));
const evenNum = numm.filter((cur) => cur % 2 === 0);
console.log(evenNum);
const sqrtNum = numm.map((cur) => cur * cur);
console.log(sqrtNum);
const names = ["Alice", "Bob", "Anna", "Andrew", "Murphy"];
const greterThatFour = names.filter((name) => name.length > 4);
console.log(greterThatFour);
const startLetterA = names.filter((name) => name.toLowerCase().charAt(0) === "a");
console.log(startLetterA);
const product = {
    name: "Mobile",
    price: 12000,
    quantity: 1,
    des: function () {
        return `Product is ${this.name} and price is ${this.price} for quantity ${this.quantity}`;
    },
};
console.log(product.des());
const product1 = ["Sampoo", 120, 1];
const Maths = ["Math", 50];
const English = ["English", 60];
const science = ["Science", 70];
const grades = [Maths[1], English[1], science[1]];
const total = grades.reduce((sum, grade) => sum + grade, 0);
console.log(total / grades.length);
const city1 = ["Burdwan", 30, "cloudy"];
const city2 = ["Kolkata", 27, "sunny"];
const displayWeather = (data) => {
    const [name, tem, condition] = data;
    return `In ${name} the temperature is ${tem}°C and conditon is ${condition} `;
};
// console.log(displayWeather(city1));
// console.log(displayWeather(city2));
const format = (value) => {
    if (typeof value === "number") {
        return `$${value.toFixed(2)}`;
    }
    else if (typeof value === "string") {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
    else if (typeof value === "boolean") {
        return value === true ? "Yes" : "No";
    }
    return "";
};
console.log(format(12));
console.log(format("sujan"));
console.log(format(true));
const createUserProfile = (user, MyLocation) => {
    console.log(`The User name is ${user.name} and he is from ${MyLocation.city} `);
};
let userDetils = {
    name: "Sujan",
    age: 27,
    email: "izaz@gmail.com",
};
let myLocation = {
    country: "India",
    city: "Kolkata",
};
createUserProfile(userDetils, myLocation);
const userInfo = {
    id: 129,
    name: "Izaz",
    email: "izaz@gmail.com",
};
const userAccountInfo = {
    accountId: 8776,
    accountType: "Savings",
    balance: 1234,
};
const combineUserAccount = (user, account) => {
    return { ...user, ...account };
};
const newData = combineUserAccount(userInfo, userAccountInfo);
// console.log(newData);
//Generics in typeScript allow us to create reusable components or function that can work with multiple data types//
//T basially works as a placeholder
function logAndReturn(val) {
    return val;
}
// console.log(logAndReturn<number>(42));
// console.log(logAndReturn<string>("sujan"));
// console.log(logAndReturn<boolean>(false));
function add(a, b) { }
// console.log(add<number>(2, 4));
//Multiple generics
function multiple(a, b) {
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    if (typeof a === "string" && typeof b === "string")
        return a + b;
    return `Invalid input`;
}
// console.log(multiple<number, number>(1, 2));
// console.log(multiple<string, string>("Hello", "World"));
// console.log(multiple(1, "World"));
// Interface
// represent of object
const det = {
    name: "iza",
    age: 12,
};
const products = {
    name: "Sampoo",
    price: 230,
    quantity: 2,
};
function calculateTotalPrice(value) {
    return value.price * value.quantity;
}
console.log(calculateTotalPrice(products));
