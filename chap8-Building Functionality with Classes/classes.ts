class Vehicle {
    // color: string = 'red';

    constructor (public color: string) {
        // this.color = color
    }
    // public drive(): void {
    //     console.log('chugga chugga')
    // }

    public honk(): void {
        console.log('BEEP')
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color)
    }
    private drive(): void {
        console.log('vroom')
    }

    public goDrive(): void {
        this.drive()
    }
}

const vehicle = new Vehicle('orange')
vehicle.honk()

const car = new Car(4, 'red')
car.goDrive()
car.honk()