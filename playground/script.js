

"use strict";
// class Person {
//     name: string;
//     private type: string;
//     protected age: number=21;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     constructor(name: string, public username: string) {
//         this.name = name; 
//     }
//     printAge() {
//         console.log(this.age);
//     }
//     setType(type: string) {
//         this.type = type;
//         console.log(this.type);
//     }
// }
// const person = new Person("vinod", "f2f");
// console.log(person);
// person.printAge();
// person.setType("Cool guy");
// // Inheritance
// class F2f extends Person {
//    name = "vedant";
// }
// type BankAccount = { money:number, deposite: (value:number) => void}
// let bankAccount : BankAccount = {
//     money: 2000,
//     deposite(value:number):void {
//         this.money = value;
//     }
// };
// let myself : {name:string, bankAccount:BankAccount, hobbies: string[]} = {
//     name: "f2f",
//     bankAccount:bankAccount,
//     hobbies: ["Sports", "cooking"]
// };
// myself.bankAccount.deposite(3000);
// console.log(myself);
// let double = (value: number) =>  value * 2;
// console.log(double(10));
// let greet = (name: string = "f2f") => {
//     console.log("hello" + name);
// }
// greet();
// greet("vinod");
// let numbers = [-3, 33, 38, 5];
// console.log(Math.min(...numbers));
// let newArray = [55, 20];
// newArray.push(...numbers);
// console.log(newArray);
// let testResults = [3.89,2.99,1.38];
// let [res1, res2, res3]= testResults;
// console.log(res1, res2, res3);
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
car.accelerate(10);
console.log(car.acceleration);
console.log(car.name);
var baseObject = /** @class */ (function () {
    function baseObject(width, length) {
        this.width = width;
        this.length = length;
    }
    return baseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        return _super.call(this, width, length) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.length * this.width;
    };
    return Rectangle;
}(baseObject));
var rectangle = new Rectangle(5, 3);
console.log(rectangle.calcSize());
var Person = /** @class */ (function () {
    function Person() {
        this._firstName = "";
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (v) {
            if (v.length > 3) {
                this._firstName = v;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
console.log(person.firstName);
person.firstName = "MA";
console.log(person.firstName);
person.firstName = "vinod";
console.log(person.firstName);
