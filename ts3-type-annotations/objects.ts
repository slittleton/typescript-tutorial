const profile = {
  firstName: 'alex',
  age: 20,
  job: 'programmer',
  job2: 'sys admin',
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age
  }
}

// Destructuring
// to use destructuring on an object you have to write out the expected structure of the value you are pulling out
// in other words you can't just put the type after the destructed variable name, you have to put an object as the type
// that contains the value or other objects etc that you are pulling out
const { age }: { age: number } = profile

const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profile;

const { firstName, job2 }: { firstName: string; job2: string } = profile

