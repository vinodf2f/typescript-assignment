//module 1

// Exsercise 1

type BankAccount = { money: number; deposit: (value: number) => void };

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: { name: string; bankAccount: BankAccount; hobbies: string[] } = {
  name: "F2F",
  bankAccount: bankAccount,
  hobbies: ["TechReading", "LanGaming"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

// module 2
// Exercise 1

let double = (value: number): number => {
  return value * 2;
};

console.log(double(10));

//exercise 2

var greet = (name: string = "F2F"): void => {
  console.log("Hello, " + name);
};
greet();
greet("Anna");

//Exercise 3

var numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

//   Exercise 4
var newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);

// Exercise 5
var testResults = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6
var scientist = { firstName: "Will", experience: 12 };
let { firstName, experience } = scientist;

console.log(firstName, experience);

// module 3

//Exercise 1

class Car {
  name: string;
  acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  honk() {
    console.log("Toooooooot!");
  }

  accelerate(speed: number) {
    this.acceleration = this.acceleration + speed;
  }
}

const car = new Car("HONDA");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);

//Exercise 2

class BaseObject {
  width = 0;
  length = 0;
}

class Rectangle extends BaseObject {
  calcSize() {
    return this.width * this.length;
  }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());

//exercise 3

class Person {
  private _firstName: string = "";

  get firstName() {
    return this._firstName;
  }

  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = "";
    }
  }
}

const person = new Person();
console.log(person.firstName);
person.firstName = "F2F";
console.log(person.firstName);
person.firstName = "Vinod";
console.log(person.firstName);

//Module 4

//exercise 1

class MyMap<T> {
  private map: { [key: string]: T } = {};

  setItem(key: string, item: T) {
    this.map[key] = item;
  }

  getItem(key: string) {
    return this.map[key];
  }

  clear() {
    this.map = {};
  }

  printMap() {
    for (let key in this.map) {
      console.log(key, this.map[key]);
    }
  }
}

const numberMap = new MyMap<number>();
numberMap.setItem("apples", 10);
numberMap.setItem("bananas", 2);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem("apples", "10");
stringMap.setItem("bananas", "2");
console.log(stringMap.getItem("apples"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
