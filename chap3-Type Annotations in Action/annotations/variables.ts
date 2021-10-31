let apples: number = 4;
let speed: string = '';
let hasName: boolean = true;

let nothing: null = undefined
let no: undefined = null

// build in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];

// Classes
// class Car {

// }
// let car: Car

// Ojbect literal
let point: { x: number; y: number} = {
    x: 10,
    y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

// When to use annotations
// 1. Function that return any type
const json = '{"x": 10, "y": 20}'
const cordinate: { x: number; y: number} = JSON.parse(json);

// 2. When we declare a variable on one line
// and initializate it later
let words = ['red', 'green', 'blue']
let foundWord: boolean;
foundWord = true;

// 3. Variable whose type cannot be inferred correctly
let numbers = [-19, -4, -5]
let numberAboveZero: boolean | number = false
numberAboveZero = 43

