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

// markMass = 77
// markHeight = 1.8

// johnMass = 83
// johnHeight = 1.94

// markBMI = (markHeight * 2) / markMass
// console.log(markBMI)
// johnBMI = (johnHeight * 2) / johnMass
// console.log(johnBMI)

// var result = markBMI >= johnBMI
// console.log('Is Mark´s BMI higher than John´s? true')
// console.log(`Is ${markBMI} higher than ${johnBMI}? ${result}`)
// console.log(`Is Mark´s BMI higher than John´s? ${result}`)

// // SOLUTION JONAS

// var massMark = 78 // Kg
// var heightMark = 1.69 // meters

// var massJohn = 92
// var heightJohn = 1.95

// var BMIMark = massMark / (heightMark * heightMark)
// var BMIJohn = massJohn / (heightJohn * heightJohn)
// console.log(BMIMark, BMIJohn)

// var markHigherBMI = BMIMark > BMIJohn
// console.log('Is Mark/`s BMI higher than John/`s? ' + markHigherBMI)

// // Mine BMI

// var massMiguel = 76.2 // Kg
// var heightMiguel = 1.74 // meters

// var BMIMiguel = massMiguel / (heightMiguel * heightMiguel)
// console.log(BMIMiguel)

/********************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John´s team scored 89, 120 and 103 points, while Mike´s team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which team wins in average (highest average score), and print the winner  to the console. Also include the average score in the output.
3. Then change the scores to show different winners.
Don´t  forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can´t solve this one,  just watch the solution, it´s no problem :)
5. Like before, change the  scores to generate different winners, keeping in  mind there might be draws.

GOOD LUCK
*/

// johnTeamAverage = 89 + 120 + 103
// mikeTeamAverage = 116 + 94 + 123
// console.log(johnTeamAverage)
// console.log(mikeTeamAverage)
// console.log(`The winner is Mike´s Team with an average of: ${mikeTeamAverage}`)

// johnTeamAverage = 98 + 72 + 84
// mikeTeamAverage = 89 + 67 + 33
// console.log(johnTeamAverage)
// console.log(mikeTeamAverage)
// console.log();

// if (johnTeamAverage >= mikeTeamAverage) {
// 	console.log('The winner is John´s Team')
// } else {
// 	console.log('The winner is Mike´s Team')
// }

//

// johnTeamAverage = 89 + 120 + 103
// mikeTeamAverage = 116 + 94 + 123

// johnTeamAverage = 116 + 94 + 123
// mikeTeamAverage = 89 + 120 + 103

// johnTeamAverage = 116 + 94 + 123
// mikeTeamAverage = 116 + 94 + 123

// switch (true) {
// 	case johnTeamAverage < mikeTeamAverage:
// 		console.log('The winner is Mike´s Team')
// 		break
// 	case johnTeamAverage === mikeTeamAverage:
// 		console.log('The has been a draw')
// 		break
// 	case johnTeamAverage > mikeTeamAverage:
// 		console.log('The winner is John´s Team')
// 	default:
// 		break
// }

johnTeamAverage = 89 + 120 + 103
mikeTeamAverage = 116 + 94 + 123
maryTeamAverage = 97 + 134 + 105

// johnTeamAverage = 89 + 120 + 103
// mikeTeamAverage = 89 + 120 + 103
// maryTeamAverage = 89 + 120 + 103

switch (true) {
	case johnTeamAverage < mikeTeamAverage && mikeTeamAverage > maryTeamAverage:
		console.log('The winner is Mike´s Team')
		break
	case johnTeamAverage === mikeTeamAverage &&
		johnTeamAverage === maryTeamAverage &&
		mikeTeamAverage === maryTeamAverage:
		console.log('The has been a draw')
		break
	case johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage:
		console.log('The winner is John´s Team')
		break
	case maryTeamAverage > johnTeamAverage && mikeTeamAverage < maryTeamAverage:
		console.log('The winner is Mary´s Team')
		break
	default:
		console.log('The match was not played')
}
