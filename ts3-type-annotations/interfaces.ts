
// NOTE: objects that satisfy the interface are allowed to have additional properties when passed as parameters
// in other words, the interface specifies mandatory properties for the parameter

interface Vehicle {
  name: string,
  year: number,
  broken: boolean
  summary(): string
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary: () => "It's a car"
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broken: ${vehicle.broken}`)
  console.log(`Summary: ${vehicle.summary()}`)
}
printVehicle(oldCivic)

interface Mammal {
  fur: boolean,
  makesMilk: boolean,
}

const theCat={
  fur: true,
  makesMilk: true,
  hasTail: true
}

const printAnimal = (cat: Mammal): void => {
  console.log(cat)
}

printAnimal(theCat)