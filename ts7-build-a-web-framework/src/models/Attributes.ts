
export class Attributes<T extends Object>{


  constructor(private data: T) {

  }

  // Generics Constraints
  // The type of K can only be one of the keys of type T
  // so for Example: if T is a type that is {firstName: string; lastName: string} 
  // then K must be either firstname or LastName
  // the return value on this getter is T[K] so the object is of the type T
  // and the key for the object of type T must be K
  // and K can only be firstName or lastName because K must be a key that exists as part
  // of the type T
  get = <K extends keyof T>(key: K): T[K] => {
    // NOTE: you may need to bind "this" value in getters and setters with arrow functions
    // otherwise the function may be called with the wrong this value
    // giving the error message cannot find property "___" on undefined
    return this.data[key];
  };

  set(update: T): void {
    // assign all properties from update object over to data object
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}










// EXAMPLE
// const attrs = new Attributes<UserProps>({
//   id: 5,
//   age: 20,
//   name: 'asdf'
// })

// const name = attrs.get('name')
// const age = attrs.get('age')
// const id = attrs.get('id')
// const notAKey = attrs.get('NotAnAcceptableKey') // gives error