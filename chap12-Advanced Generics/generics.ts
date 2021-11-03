class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index]
    }
}

class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index]
    }
}

const arr = new ArrayOfAnything<string>(['s', 'sd'])
const arr1 = new ArrayOfAnything(['s', 'sd'])

// Example of generics with functions
function printStrings(arr: string): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

printAnything<string>(['a', 'b']) // prefer
printAnything(['a', 'b'])

// ------------------

interface Printable {
    print(): void;
}

// Type constrain
function printHouseOrCar<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print()
    }
}