"use strict";
// Generics allow you to specify the type that a class will take
// the type is "generic" in that it is defined later when instantiation occurs
// Or when you are creating child classes that inherit from another class
// in other words if you know the type then you can just put it in the constructor
// if you don't know the exact type then you can use generics and tell the class the type later
// We use < > to specify Parameter type usually <T>
class HoldAnything {
    constructor(data) {
        this.data = data;
    }
}
// notice the type is specified during the instatiation
const holdNumber = new HoldAnything(123);
const holdString = new HoldAnything('this is a string');
const holdArray = new HoldAnything([1, 2, 3]);
const holdObject = new HoldAnything({ val1: "obj val 1" });
// OR use generics during inheritance
class ChildClass extends HoldAnything {
    constructor(arr) {
        super(arr);
    }
}
const childClass = new ChildClass([1, 23, 4, 56, 7, 89]);
