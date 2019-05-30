// let myString: String;
// let myNum: number;

// myString = 'hello y';
// myNum = 22;

// console.log(myString);

// class Person {
//     name: string;
//     private type: string;
//     protected age: number=21;

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

//  Inheritance

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

// class Car {
//     name: string;
//     acceleration: number = 0;

//     constructor(name: string) {
//         this.name = name;
//     }

//     honk() {
//         console.log("Toooooooooot");
//     }

//     accelerate(speed: number): void {
//         this.acceleration = this.acceleration + speed;
//     }

// }

// let car = new Car("BMW");
// car.honk();
// car.accelerate(10);
// console.log(car.acceleration);
// console.log(car.name);

// class baseObject {
//     width: number;
//     length: number;
//     constructor(width: number, length: number) {
//         this.width = width;
//         this.length = length;
//     }
// }

// class Rectangle extends baseObject {
//     calcSize(): number {
//         return this.length * this.width;
//     }

//     constructor(width: number, length: number) {
//         super(width, length);
//     }
// }
// let rectangle = new Rectangle(5, 3);
// console.log(rectangle.calcSize());

// class Person {
//     private _firstName: string = "";

//     public get firstName(): string {
//         return this._firstName;
//     }

//     public set firstName(v: string) {
//         if (v.length > 3) {
//             this._firstName = v;
//         } else {
//             this._firstName = "";
//         }

//     }
// }

// const person = new Person();
// console.log(person.firstName);
// person.firstName = "MA";
// console.log(person.firstName);
// person.firstName = "vinod";
// console.log(person.firstName);

interface a {
  name: string;
  surame: string;
  age: number;
  toString(): void;
}
