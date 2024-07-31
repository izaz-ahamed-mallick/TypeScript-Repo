let num1 = 12;
let num2 = 13;

function addNum(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(addNum(num1, num2));

let message: string = "hello typescript";
// console.log(message.length);
let upperCaseLetter: string = message.toUpperCase();
console.log(upperCaseLetter);

let longText: string = "abcdefghijklmnopqrstuvwxyz";
let sortText: string = longText.slice(0, 10);
console.log(sortText);

let isEven = (num: number): boolean => {
    return num % 2 === 0 ? true : false;
};

console.log(isEven(2));

function str(fname: string, lname: string): string {
    return fname + " " + lname;
}
// console.log(str("sujan", "mallick"));

function calculateAverage(arr: number[]): number {
    const sumOfArray = arr.reduce((acc, curr) => acc + curr, 0);
    return sumOfArray / arr.length;
}
// console.log(calculateAverage([1, 2, 3]));

const findMaxValue = (arr: number[]): number => {
    return arr.reduce((acc, curr) => (acc < curr ? (acc = curr) : curr), 0);
};
console.log(findMaxValue([1, 2, 3, 4]));

const arr2: (string | number)[] = [1, 2, "2", "sujan"];

const numm: number[] = [1, 2, 3, 4, 5];

const doubleNum: number[] = numm.map((cur: number) => cur * 2);
console.log(doubleNum.join(","));

const evenNum: number[] = numm.filter((cur: number) => cur % 2 === 0);
console.log(evenNum);
const sqrtNum: number[] = numm.map((cur) => cur * cur);

console.log(sqrtNum);

const names: string[] = ["Alice", "Bob", "Anna", "Andrew", "Murphy"];

const greterThatFour: string[] = names.filter(
    (name: string) => name.length > 4
);

console.log(greterThatFour);
const startLetterA: string[] = names.filter(
    (name) => name.toLowerCase().charAt(0) === "a"
);
console.log(startLetterA);

type Product = {
    name: string;
    price: number;
    quantity: number;
    des: () => string; //call signature
};

const product: Product = {
    name: "Mobile",
    price: 12000,
    quantity: 1,
    des: function () {
        return `Product is ${this.name} and price is ${this.price} for quantity ${this.quantity}`;
    },
};

console.log(product.des());

type ProductInfo = [string, number, number];

const product1: ProductInfo = ["Sampoo", 120, 1];

type SubjectGradeTupple = [string, number];

const Maths: SubjectGradeTupple = ["Math", 50];
const English: SubjectGradeTupple = ["English", 60];
const science: SubjectGradeTupple = ["Science", 70];

const grades: number[] = [Maths[1], English[1], science[1]];

const total: number = grades.reduce((sum, grade) => sum + grade, 0);
console.log(total / grades.length);

type WeatherData = [string, number, string];
const city1: WeatherData = ["Burdwan", 30, "cloudy"];
const city2: WeatherData = ["Kolkata", 27, "sunny"];
const displayWeather = (data: WeatherData) => {
    const [name, tem, condition] = data;
    return `In ${name} the temperature is ${tem}°C and conditon is ${condition} `;
};

// console.log(displayWeather(city1));
// console.log(displayWeather(city2));

const format = (value: string | number | boolean): string | number => {
    if (typeof value === "number") {
        return `$${value.toFixed(2)}`;
    } else if (typeof value === "string") {
        return value.charAt(0).toUpperCase() + value.slice(1);
    } else if (typeof value === "boolean") {
        return value === true ? "Yes" : "No";
    }
    return "";
};

console.log(format(12));
console.log(format("sujan"));
console.log(format(true));

type User1 = {
    name: string;
    age: number;
    email: string;
};
type LocationDetails = {
    city: string;
    country: string;
};

const createUserProfile = (user: User1, MyLocation: LocationDetails): void => {
    console.log(
        `The User name is ${user.name} and he is from ${MyLocation.city} `
    );
};

let userDetils: User1 = {
    name: "Sujan",
    age: 27,
    email: "izaz@gmail.com",
};
let myLocation: LocationDetails = {
    country: "India",
    city: "Kolkata",
};

createUserProfile(userDetils, myLocation);

type UserInfo = {
    id: number;
    name: string;
    email: string;
};
type AccountInfo = {
    accountId: number;
    accountType: string;
    balance: number;
};

const userInfo: UserInfo = {
    id: 129,
    name: "Izaz",
    email: "izaz@gmail.com",
};
const userAccountInfo: AccountInfo = {
    accountId: 8776,
    accountType: "Savings",
    balance: 1234,
};

const combineUserAccount = (
    user: UserInfo,
    account: AccountInfo
): UserInfo & AccountInfo => {
    return { ...user, ...account };
};
const newData: UserInfo & AccountInfo = combineUserAccount(
    userInfo,
    userAccountInfo
);
// console.log(newData);

//Generics in typeScript allow us to create reusable components or function that can work with multiple data types//
//T basially works as a placeholder
function logAndReturn<T>(val: T): T {
    return val;
}

// console.log(logAndReturn<number>(42));
// console.log(logAndReturn<string>("sujan"));
// console.log(logAndReturn<boolean>(false));

function add<T>(a: T, b: T) {}

// console.log(add<number>(2, 4));

//Multiple generics

function multiple<T, U>(a: T, b: U) {
    if (typeof a === "number" && typeof b === "number") return a + b;
    if (typeof a === "string" && typeof b === "string") return a + b;
    return `Invalid input`;
}

// console.log(multiple<number, number>(1, 2));
// console.log(multiple<string, string>("Hello", "World"));
// console.log(multiple(1, "World"));

// Interface
// represent of object

const det: { name: string; age: number } = {
    name: "iza",
    age: 12,
};

interface Products2 {
    name: string;
    price: number;
    quantity: number;
}

const products: Products2 = {
    name: "Sampoo",
    price: 230,
    quantity: 2,
};

function calculateTotalPrice(value: Products2): number {
    return value.price * value.quantity;
}

console.log(calculateTotalPrice(products));
