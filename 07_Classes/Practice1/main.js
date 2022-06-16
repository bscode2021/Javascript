// class Dog {
//    constructor(param1, param2, param3, param4) {
//       this.dogName = param1;
//       this.weight = param2;
//       this.color = param3;
//       this.breed = param4;
//    }

//    dogDiscription() {
//       console.log(
//          "Name:",
//          this.dogName,
//          "Weight:",
//          this.weight,
//          "Breed:",
//          this.breed
//       );
//    }
// }

// let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
// let dog2 = new Dog("CSharp", 4.4, "grey", "bulldog");

// dog.dogDiscription();
// dog2.dogDiscription();

// class Person {
//    #firstName;
//    #lastName;

//    constructor(firstName, lastName) {
//       this.#firstName = firstName;
//       this.#lastName = lastName;
//    }

//    get firstNameGet() {
//       return this.#firstName;
//    }

//    set firstNameSet(fname) {
//       this.#firstName = fname;
//    }

//    fullName() {
//       return this.#firstName + " " + this.#lastName;
//    }
// }

// let person1 = new Person("Boban", "Srezovski");
// let person2 = new Person("Ljupco", "Trajanovski");

// console.log("Hello,", person1.firstNameGet);
// console.log("Hello,", person1.fullName());

// class Vehicle {
//    constructor(color, currentSpeed, maxSpeed) {
//       this.color = color;
//       this.currentSpeed = currentSpeed;
//       this.maxSpeed = maxSpeed;
//    }

//    move() {
//       console.log("Moving at", this.currentSpeed);
//    }

//    accelerate(ammont) {
//       this.currentSpeed += ammont;
//    }
// }

// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }

//     doWheelie() {
//         console.log("Driving on one wheel!");
//     }
// }

// Motorcycle.prototype.stop = function () {
//     this.currentSpeed = 0;
// }
// Motorcycle.prototype.brand = "Honda";

// let motor = new Motorcycle("Black", 0, 250, "gasoline");

// motor.accelerate(100);
// console.log(motor.move());
// motor.stop();
// console.log(motor.move());

class Person {
   #firstname;
   #lastname;
   constructor(firstName, lastName) {
      this.#firstname = firstName;
      this.#lastname = lastName;
   }

   get firstName() {
      return this.#firstname;
   }

   set firstName(fname) {
      if (typeof fname === "string") {
         this.#firstname = fname;
      }
   }

   // get lastname() {
   //    return this.#lastname;
   // }

   // set lastname(lname) {
   //    if (typeof lname === "string") {
   //       this.#lastname = lname;
   //    }
   // }
}

let person10 = new Person("Boban", "Srezovski");
person10.firstName;

person10.firstName = "Test";


class Vehicle {
   constructor(color) {
      this.color = color;
   }
}

class Car extends Vehicle {
   constructor(color, wheels) {
      super(color);
      this.wheels = wheels;
   }
}
Car.prototype.dors = 5;
Car.prototype.accelerate = function (params) {
   console.log("Nesto");
}
let myCar = new Car("Green", 4);
myCar.wheels
