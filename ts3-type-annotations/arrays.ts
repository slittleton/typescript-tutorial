//Typed Arrays


const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()]

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

const theCar = carMakers[0]
const myCar = carMakers.pop()


//Help with map()
carMakers.map((car: string): string => {
  return car.toUpperCase();
})



// Flexible types
const importantDate: (Date | string)[] = [new Date(), '2030-10-10']


