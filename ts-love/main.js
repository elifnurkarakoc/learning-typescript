var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function sayHello(message) {
    console.log(message);
}
sayHello("Selam :)");
// Javascript versiyonları ile ilgili not:
//  	ES5(Supported all browsers)
//  	ES6(2015)(Arrows,classes,template strings,let.., const.. [...array])
//  	ES7(ES2016)(Array.prototype.includes)
//  	ES8(ES2017)
var myname = "elif";
var myWord = "Ben " + myname;
var myArray = ["elif", "nur"];
var copyArray = __spreadArray([], myArray, true);
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
var value = "hello";
//value=5; //--> error
var x; // typeAnnotaions
x = "Elif";
var a;
a = 5;
a = "any";
a = true;
var Color;
(function (Color) {
    Color[Color["Purple"] = 0] = "Purple";
    Color[Color["Black"] = 1] = "Black";
    Color[Color["Red"] = 2] = "Red";
})(Color || (Color = {}));
var bgColor = Color.Black;
bgColor = Color.Black;
var error; //tuple
error = ["Not Found", 404];
var notSure;
notSure = "Elif";
notSure = false;
notSure = ["sdad", "asfda"];
/**
 * Type Assertions ?
 *
 */
var message;
message = "Elif Nur";
var newMessage = message.toLowerCase();
var newnewMessage = message.toLowerCase();
/**
 * object type
 */
var user = {
    name: "Elif",
    age: 25,
    favoriteColor: "purple"
};
/**
 * Union Type
 * (type1 | type2 | type3 | .. |typeN)
 * Literal Type
 */
var client;
var newClient;
// newClient.color.hex ="44px";
// newClient.color.name="black";
/**
 * Functions
 * Default, Optional Params --> ? soru işareti konuyor.
 */
var add = function (num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
};
add(2, 3);
var logUser = function (firstname, lastname) {
    console.log(firstname + " " + lastname);
};
logUser("Elif Nur", "Karakoç");
var logColor = function (color) {
    console.log(color);
};
logColor({
    name: "black",
    hex: "#000"
});
var newEmployee;
newEmployee = {
    empCode: 1,
    name: "Elif"
};
var newEmployee2;
var Employeee = /** @class */ (function () {
    function Employeee(empCode, name, age) {
        this.getSalary = function (empCode) {
            return 10000;
        };
    }
    return Employeee;
}());
var newEmployee3 = new Employeee(1, "Elif", 25);
console.log(newEmployee3.getSalary(1));
