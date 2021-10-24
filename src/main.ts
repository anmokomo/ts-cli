import { Factorial } from "./factorial"

const argc = process.argv.splice(2)

if (argc.length != 1) {
    console.error(`invalid number of args ${argc}`)
    process.exit(1)
}

const inputNumber = argc[0]

// if (! /^\d+$/.test(inputNumber)) {
//     console.error(`invalid input ${inputNumber}`)
//     process.exit(1)
// }

const factorial = new Factorial(+inputNumber).getFactorial()
console.log(`Factorial of ${inputNumber} is ${factorial}`)



// export class Main {
//     static log(val: string | number) {
//         console.log(val)
//     }
// }
// Main.log('Hello World')
