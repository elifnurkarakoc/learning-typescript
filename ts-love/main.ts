function sayHello(message) {
    console.log(message)
}
sayHello("Selam :)");



// Javascript versiyonları ile ilgili not:
//  	ES5(Supported all browsers)
//  	ES6(2015)(Arrows,classes,template strings,let.., const.. [...array])
//  	ES7(ES2016)(Array.prototype.includes)
//  	ES8(ES2017)

const myname = "elif";
const myWord = `Ben ${myname}`

const myArray = ["elif", "nur"]
const copyArray = [...myArray]



/**
 * @typeAnnotaions :type
 * Any
 * Number
 * String
 * Boolean
 * Arrays string[],number[], any[]
 * Enum
 * Tuple [type1,type2]
 * Unknown
 * TYPE INFERENCE?
 */

//static Typing
let value = "hello"
//value=5; //--> error

let x: string;// typeAnnotaions
x = "Elif";

let a: any;
a = 5;
a = "any";
a = true;


enum Color { Purple, Black, Red }
let bgColor = Color.Black;
bgColor = Color.Black;

let error: [string, number] //tuple
error = ["Not Found", 404]

let notSure: unknown;
notSure = "Elif";
notSure = false;
notSure = ["sdad", "asfda"]

/**
 * Type Assertions ? 
 * 
 */

let message;
message = "Elif Nur";

const newMessage = (<string>message).toLowerCase();
const newnewMessage = (message as string).toLowerCase();


/**
 * object type
 */
let user: {
    name: string;
    age: number;
    favoriteColor: string;
} = {
    name: "Elif",
    age: 25,
    favoriteColor: "purple"
}

/**
 * Union Type
 * (type1 | type2 | type3 | .. |typeN)
 * Literal Type
 */

let client: {
    name: string;
    age: number | string;
    role: "admin" | "user";//literal type
}

// client.age = 22;

/**
 * Custome Type
 */

type CustomColor = {
    name: string;
    hex: string;
};
let newClient: {
    name: string;
    age: number | string;
    role: "admin" | "user";//literal type
    color: CustomColor;
}
// newClient.color.hex ="44px";
// newClient.color.name="black";


/**
 * Functions
 * Default, Optional Params --> ? soru işareti konuyor.
 */

const add = (num1: number, num2: number): number => {
    console.log(num1 + num2);
    return num1 + num2;
}

add(2, 3);


const logUser = (firstname: string, lastname?: string) => {
    console.log(firstname + " " + lastname);
}

logUser("Elif Nur", "Karakoç");


const logColor = (color: CustomColor) => {
    console.log(color);
}

logColor({
    name: "black",
    hex: "#000",
});

/**
 * Interfaces
 */
interface Employee {
    readonly empCode: number;
    name: string;
    age?: number;
}


let newEmployee: Employee;
newEmployee = {
    empCode: 1,
    name: "Elif",
};

// newEmployee.empCode = 2; => error

/**
 * Extending Interfaces
 */
interface Person {
    name: string;
    age: number;
}
interface Employee2 extends Person {
    readonly empCode: number;
}
let newEmployee2: Employee2;

interface IEmployee {
    readonly empCode: number;
    name: string;
    age: number;
    getSalary: (number) => number;
}


class Employeee implements IEmployee {
    empCode: number;
    name: string;
    age: number;
    constructor(empCode: number, name: string, age: number) { }
    getSalary = (empCode: number) => {
        return 10000;
    }
}
let newEmployee3 = new Employeee(1, "Elif", 25);

console.log(newEmployee3.getSalary(1))