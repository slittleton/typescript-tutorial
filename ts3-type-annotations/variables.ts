let apples: number = 5;
let speed: string = "fast"
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
let customVar: boolean | number;


// built in objects
let now: Date = new Date()


// Array
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, true, false];

// Classes
class Car {

}

let car: Car = new Car()

//Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}



// JSON - adapt your object types to fit what you get from JSON or use Type "any" if you have to
const json = '{"x":10,"y":20}'
const coordinates: {x: number; y:number} = JSON.parse(json)




// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
} 



