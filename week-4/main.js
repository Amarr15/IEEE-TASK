/*Write examples illustrating the use of each of the following:
Static properties
Private properties
Setters and getters
Method chaining
------------------------------------------------------------------------
Static => يعني خاصية تبقى موجودة في الكلاس نفسه مش في كل كائن بنعمله منه.
class Car {
  static wheels = 4;

  static showWheels() {
    console.log(Car.wheels);
  }
}
Car.showWheels();
------------------------------------------------------------------------
Private => يعني لو عملت عربية جديدة من الكلاس ده مش هتقدر توصل من العربية نفسها لازم توصلها من الكلاس على طول.
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }
  showBalance() {
    console.log(`Balance: ${this.#balance}`);
  }
}
const acc = new BankAccount();
acc.deposit(100);
acc.showBalance();
------------------------------------------------------------------------
Setters and getters => دول بنستخدمهم لما نحب نتحكم في القراية أو الكتابة على الخصائص.
class Person {
  #name = '';
  set name(value) {
    if (value.length > 0) {
      this.#name = value;
    }
  }
  get name() {
    return this.#name;
  }
}
const p = new Person();
p.name = 'Ali';
console.log(p.name);
------------------------------------------------------------------------
Method Chaining => يعني تقدر تنادي كذا دالة ورا بعض على نفس الاوبجكت.
*/




/*
Explain the difference between this keyword's value in the following examples:
------------------------------------------------------------------------
const player = {
    firstName: "Ahmed",
    lastName: "Hafez",
    introduce: () => {
        console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
    }
}
player.introduce();
=> The introduce function here is implemented using the arrow function
and the this in the arrow function does not point to the player object but
rather takes the value of this from the location where the object is written (usually window).
out => Hey, I'm undefined undefined
------------------------------------------------------------------------
const player = {
    firstName: "Ahmed",
    lastName: "Hafez",
    introduce() {
        console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
    }
}
player.introduce();
=> Here introduce is used as a normal method inside an object. In this case, this refers to the object that contains the function, i.e. player.
out => Hey, I'm Ahmed Hafez
------------------------------------------------------------------------
function introduce() {
    console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
}

const player = {
    firstName: "Ahmed",
    lastName: "Hafez",
    introduce
}
player.introduce();
=>Although the introduce function was written outside, when we added it to the player object and called it from it, this here became a reference to player.
out => Hey, I'm Ahmed Hafez
------------------------------------------------------------------------
function introduce() {
    console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
}

const player = {
    firstName: "Ahmed",
    lastName: "Hafez"
}
introduce(); // 1
introduce.call(player); // 2
=> The first call (introduce();) is executed in the global context, so this refers to window or undefined, depending on whether you are in strict mode or not.
*/






/*
// Vehicle.js
class Vehicle {
  constructor(color = "blue", wheels = 4, horn = "beep beep") {
    this.color = color;
    this.wheels = wheels;
    this.horn = horn;
  }

  honkHorn() {
    console.log(this.horn);
  }
}
export default Vehicle;

// Bicycle.js
import Vehicle from './Vehicle.js';

class Bicycle extends Vehicle {
  constructor(color = "blue") {
    super(color, 2, "honk honk");
  }
}
export default Bicycle;

// main.js
import Vehicle from './Vehicle.js';
import Bicycle from './Bicycle.js';
const car = new Vehicle();
const bike = new Bicycle("red");

console.log("Car:");
car.honkHorn();
console.log("Bike:");
bike.honkHorn();

console.log(`Bike color: ${bike.color}`);
console.log(`Bike wheels: ${bike.wheels}`);

*/





/*
Date.prototype.addHours = function(H) {
    this.setHours(this.getHours() + H);
};
 */



/*
function* fibonacci() {
  let a = 0, b = 1;
  yield a;
  yield b;
  
  while (true) {
    let next = a + b;
    yield next;
    a = b;
    b = next;
  }
}

*/