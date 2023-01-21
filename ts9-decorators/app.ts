/**
 * 
 * tsc --init
 * 
 * inside tsconfig file - experimental options
 * "experimentalDecorators": true,                 
 * "emitDecoratorMetadata": true, 
 *  "target": "es5",   
 * 
 * run ts file
 *  ts-node app.ts
 * 
 * 
 * Decorators
 * 
 *  - the first argument is the prototype of the object
 *  - the second argument is the key of the property/method/accessor on the object
 *  - the third argument is the property descriptor
 *  - Decorators are applied when the code fo the class is ran (not when an instance is created)
 *    so the decoractor is only ran once when the class is defined
 *    decorator(target, key, desc)
 */

@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @logError("oops boat sunk")
  pilot(): void {
    throw new Error();
    console.log('swish');
  }

  @logError("oops boat sunk")
  pilot2(@parameterDecorator speed: string): void {

    if (speed = 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }

  //end of class
}

// decorator factory - a funcation that wraps around the decorator to add additional functionality
function logError(errorMessage: string) {
  // the decorator funciton
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };


}

new Boat().pilot();

// the prototype of an object stores methods but not property values
// so this decorator will only return the string "color" instead of the property value of color : "red"
// because decorators are executed when the class is ran there is no instantiated object yet
// so there is no property values set yet
function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);

}

//Parameter Decorators
// you can add decorators to parameters of methods
// this allows you to get at the arguments being passed to a function
function parameterDecorator(target: Boat, key: string, index: number) {
  console.log(key, index);
}

// Class Decorator
// allows you to get at the constructor of a class
function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}



// Property Descriptors
const car = { make: 'honda', year: 2000 };

Object.getOwnPropertyDescriptor(car, 'make');
//{value: 'honda', writable: true, enumerable: true, configurable: true}

Object.defineProperty(car, 'make', { writable: false })
// {make: 'honda', year: 2000}



