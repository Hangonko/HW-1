// --------------- დავალება 1 --------------- //

// const arr = [1,-2,4,8,-7,10];

// const newArr = arr.filter((x) => x > 0);

// const sumOfPositive = newArr.reduce((total, current) => {
//     return total+current;
// }, 0);

// console.log(sumOfPositive);

// --------------- დავალება 2 --------------- //

// const stringArr = ["a", "b", "a", "c", "b", "a"];
// var a = 0;
// var b = 0;
// var c = 0;

// const calculate = stringArr.forEach((item) => {
//   if (item === "a") {
//     return a++;
//   }
//   if (item === "b") {
//     return b++;
//   }
//   if (item === "c") {
//     return c++;
//   }
// });

// const calculated = { a: a, b: b, c: c };

// console.log(calculated);

// --------------- დავალება 3 --------------- //

// class Car {
//   constructor(brand, model, speed = 0, motion = "The car is not moving") {
//     this.brand = brand;
//     this.model = model;
//     this.speed = speed;
//     this.motion = motion;
//     motion = this.check_motion();
//   }

//   check_motion() {
//     if (this.speed > 0) {
//       return (this.motion = "The car is moving");
//     } else if (this.speed <= 0) {
//       return this.motion;
//     }
//   }

//   accelerate = (x) => {
//     if (x > 0) {
//       this.check_motion();
//       return (this.speed += x);
//     }
//   };

//   brake = (x) => {
//     if (this.speed >= x) {
//       this.check_motion();
//       return (this.speed -= x);
//     } else if (this.speed < x) {
//       this.check_motion();
//       return (this.speed = 0);
//     }
//   };

//   emergency_brake() {
//     this.check_motion();
//     return (this.speed = 0);
//   }

//   status = () => {
//     return console.log(
//       `მანქანა ${this.brand} ${this.model} მოძრაობს ${this.speed} კმ/სთ სიჩქარით და სტატუსია: ${this.motion}.`
//     );
//   };
// }

// const car = new Car("Ford", "Fiesta", 12);
// car.brake();
// car.accelerate();
// // car.emergency_brake();
// car.status();
// console.log(car);

// --------------- დავალება 4 --------------- //

// const value = 0;
// const value2 = 12;

// const addAsync = new Promise((resolve, reject) => {
//   if (value === 0 && value2 === 12) {
//     resolve("Success");
//   } else {
//     reject("Failure");
//   }
// });

// addAsync.then((val) => console.log(val)).catch((err) => console.log(err));
