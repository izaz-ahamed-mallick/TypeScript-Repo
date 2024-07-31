// Basic Types
//Number,String,Boolean

let a: string;
a = "s";
let b: number;
b = 1;
let c: boolean;
c = false;

// Array
//Arr
let myArr: number[];
myArr = [1, 2, 3, 4];
console.log(myArr);

//Tuple:-Fixed Size and location
let arr: [number, number, string] = [1, 5, "Sujan"];

// here we can put any type variable
let variable: any;
variable = 12;
variable = "syr";

//when we not sure type of variable

let vare: unknown;

//type Never when we used it next not not execute never this function not return anything ever;

function abcd(): never {
    while (true) {}
}
// abcd()

// console.log("hey"); // this code never execute

// we can say the function which type return

function returnN(): number {
    return 12;
}

returnN();
//void means function not return anything

function noReturn(): void {
    console.log("no Return");
}

// enum:enumarsion :-is basically group lots of variables;

// enum Human {
//     name = "izaz",
//     age = 26,
// }
// console.log(Human.name);

// type object
// let obj:object;
// obj = {};
// console.log(obj);

// type Inference

//  Union :it accept string or number ,any one

// let xy:string|number;

// Intersection : In TypeScript, intersections allow you to combine multiple types into one,
//  requiring all properties from each type to be present.
//   This is useful when you want a type to have a mix of properties
//   from different types or interfaces.

// type := custom type declare;
// Type aliases are more flexible and can define various types,
//  including primitives, unions, intersections, tuples, and more.
//   They are not limited to object shapes.

type City = {
    name: string;
    population: number;
};
type Planet = {
    name: string;
    cities: number;
};

type intersect = City & Planet; //intersect the two type when we used it we can pass exact keys similar to declare in type

let value: intersect = {
    name: "Burdwan",
    population: 12000,
    cities: 10,
};

let rt: number;
rt = 122;

//Primitives type aliases

type Name = string;
type age = number;

let userAge: age;
userAge = 22;

let user: Name;
user = "sujan";

//refrence type aliases

type User = {
    name: string;
    age: number;
    email: string;
};

let userDetails: User = {
    name: "izaz",
    age: 23,
    email: "izaz@iza",
};

type Dabba = {
    weight: number;
    color: string;
};

let dabba: Dabba = {
    weight: 23,
    color: "#FFFFF",
};

// Union type

type Age = string | number;

let age: Age = 12;

// Choosing Between Interface and Type
// Use interface when:

// You are defining the shape of an object.
// You expect the structure to be extended or merged.
// You are working in a more class-based or object-oriented design.

// Use type when:

// You need to define more than just an object shape, like unions, intersections, or tuples.
// You want to avoid declaration merging.
// You are defining complex types or leveraging TypeScript's type system in more advanced ways.

// Interface

// Interfaces are primarily used to define the structure of an object.
//  They are flexible and can be extended or merged, making them useful
//  for defining shapes
// in object-oriented programming and larger codebases.

interface UserDet {
    name: string;
    age: number;
    isAvialable: boolean;
}

interface ExtraUser extends UserDet {
    email: string;
}

let userN: UserDet = {
    name: "sujan",
    age: 12,
    isAvialable: true,
};
let user2: ExtraUser = {
    name: "sujan",
    age: 12,
    isAvialable: true,
    email: "iza@f",
};

function userDet(user: ExtraUser) {
    return user.email;
}

let ss = userDet(user2);
console.log(ss);

// classes

type Data = string | null;

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
    constructor(public shape: string) {
        this.shape = shape;
    }
}

let b1 = new Bottle("Square");

// Acess modifier :-public/private/protected

// public:its by default and we can modifie from outside
class Mobile {
    public name = "Redmi";
    constructor() {
        console.log(this.name);
    }
}

let m1 = new Mobile();
m1.name = "Oppo";

// private: extended class not acess this/ we can use this value indside the class where we declare , we cant modifie value from outside

class UserAc {
    private balance = 1200;
    getbalance() {
        return this.balance;
    }
}

let u1 = new UserAc();
// u1.balance = 12000; //error show

u1.getbalance(); //we can acess this data

// protected:use in this class where we declare and also acess when we extend to another class but we can't use outside

class UserAccount {
    protected balance = 12000;
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
    protected getVal(balance: number) {
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
    constructor(public readonly name: string) {
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
    constructor(public username: string) {
        this.username = username;
    }
    get getName() {
        return this.username;
    }

    set setName(user: string) {
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

function Abb(): string {
    return "hello";
}

// console.log(Abb().includes("s"));

//Arrow func
const arro = (): void => {};

// Implicit return:we cant write function which type return its automatically set which item return;
//Explicit return :we can write which type return

// implicit:-
function implicit() {
    return 12;
}

//Explicit:-

function explicit(): number {
    return 12;
}

// Optional Parameters:here we can set paramter optional we can pass argument or not pass no problem;

// syntax
function optional(name: string, age: number, gender?: string) {
    return { name, age, gender };
}

// console.log(optional("izaz", 26, "Male"));

// Default Param :-we can pass default params
function defaul(name: string = "default") {
    console.log(name);
}

// defaul("sujan");

//Rest params:similarly as we used in js but here must be write the type

function restParam(...rest: string[]) {
    console.log(rest);
}
restParam("sujan", "mallick", "uizaz");

// modules :-import/export
// basically import and export variable and acess into another file
// in normal we can see this result in node no browser for show result in browser we need a bundler

//Type Assertions:when we are doing dom manipulation thats time we can put the htmlElement type which element we acess;

const p = document.querySelector("p") as HTMLParagraphElement;

//Literal Types:
//String literal:clearly we can put value ;those value not chnage alltym put this variable not chng

let strLiteral: "sujan";
strLiteral = "sujan";

//Number
let numLiteral: 12;
numLiteral = 12;

//  Union

let uni: "sujan" | 32;
// uni = 13; //we cant chng this because we are literally put value

//Generics in typeScript allow us to create reusable components or function that can work with multiple data types//
