/********************************
 * coding challenge 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height^2 == mass / (height * height).
(mass in kg and height in meter).

1. Store Mark´s and John´s mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark´s BMI higher than John´s? true".)

GOOD LUCKs
*/

// markBMI = x // undefined
// johnBMI = y

markMass = 77
markHeight = 1.8

johnMass = 83
johnHeight = 1.94

markBMI = (markHeight * 2) / markMass
console.log(markBMI)
johnBMI = (johnHeight * 2) / johnMass
console.log(johnBMI)

var result = markBMI >= johnBMI
console.log('Is Mark´s BMI higher than John´s? true')
console.log(`Is ${markBMI} higher than ${johnBMI}? ${result}`)
console.log(`Is Mark´s BMI higher than John´s? ${result}`)

// SOLUTION JONAS

var massMark = 78 // Kg
var heightMark = 1.69 // meters

var massJohn = 92
var heightJohn = 1.95

var BMIMark = massMark / (heightMark * heightMark)
var BMIJohn = massJohn / (heightJohn * heightJohn)
console.log(BMIMark, BMIJohn)

var markHigherBMI = BMIMark > BMIJohn
console.log('Is Mark/`s BMI higher than John/`s? ' + markHigherBMI)

// Mine BMI

var massMiguel = 76.2 // Kg
var heightMiguel = 1.74 // meters

var BMIMiguel = massMiguel / (heightMiguel * heightMiguel)
console.log(BMIMiguel)
