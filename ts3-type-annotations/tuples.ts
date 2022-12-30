// Tuples


// object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

type Drink = [string, boolean, number]

// tuple - the elements will repeat in the same order tied to specific types
const pepsi:[string, boolean, number] = ['brown', true, 40]

const tea: Drink = ['brown', false, 0]


// Why you will probably use objects more than tuples
// notice that in the tuple we don't really know what the [number, number] tuple repsents 
// compared to the object where we know exaclty what the numbers are referring to
const carSpecs:[number, number] = [400,3346]

const carStats = {
  horsepower: 400,
  weight: 3346
}