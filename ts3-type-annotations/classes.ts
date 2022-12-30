// Classes



class Vehicle {
  constructor(public color: string) {
    this.color = color
  }

  public honk(): void {
    console.log('beep')
  }



}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {

    super(color)

  }

  private drive(): void {
    console.log('vroom')
  }

  public startDriving() {
    this.drive()
  }
}



const vehicle = new Vehicle('orange')
vehicle.honk()

const car = new Car(4, 'green')

car.startDriving()
car.honk()