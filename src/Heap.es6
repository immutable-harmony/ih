// "use strict";
// console.log('Heap.js');
// // require=("babel-core/register.js");
// var person = {name: "aaron", age: 35};
// let {name, age} = person;

// console.log(name);
// console.log(age);



import 'core-js/shim';

export default class Person {

  constructor( name ) {
    this.name = name;
  }

  sayHello() {
    return `Hello ${ this.name }!`;
  }

  sayHelloThreeTimes() {
    let hello = this.sayHello();
    return `${ hello } `.repeat(3);
  }
}