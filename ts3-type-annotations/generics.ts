
// Example of Generics with Classes -------------------------------------------------

class ArrayOfNumbers {
  constructor(public collection: number[]) {
  }

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) { }

  get(index: number): string {
    return this.collection[index];
  }
}



class ArrayOfAnything<T> {
  constructor(public collection: T[]) { }

  get(index: number): T {
    return this.collection[index];
  }
}


// Example of Generics with Funcitons -------------------------------------------------

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}


function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}



printAnything<string>(['a', 'b', 'c']);




// Generic Constraints --------------------------------------------------

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a House');
  }
}
interface Printable{
  print():void
}
// T must extend an interace so that Typescript can verify that that T will have the print method
// NOTE::: you must use extends here, for some reason implements is not allowed <T extends Interface>

function printHousesOrCars<T extends Printable>(arr: T[]): void {

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].print());
  }

}

// Alternatively you can just use the interface for specifying the array type (i.e. not using generics)
printHousesOrCars([new Car(), new House()])

function printHousesOrCars2(arr: Printable[]): void {

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].print());
  }

}