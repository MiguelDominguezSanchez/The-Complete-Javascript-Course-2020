/* ***********************
 * Variables and data types
 */
/*
var firstName = 'John'
console.log(firstName)

var lastName = 'Smith'
var age = 28

var fullAge = true
console.log(fullAge)

var job
console.log(job)

job = 'Teacher'
console.log(job)

// Variable naming rules
var _3years = 3
var johnMark = 'John and Mark'
var if = 23
*/

/* ***********************
 * Variable mutation and type coercion
 */
/*
var firstName = 'John'
var age = 28

// Type coercion
console.log(firstName + ' ' + age)

var job, isMarried
job = 'teacher'
isMarried = false

console.log(
    firstName +
    ' is a ' +
    age +
    ' year old ' +
    job +
    '.Is he married? ' +
    isMarried
    )
    
    // Variable mutation
    age = 'twenty eight'
    job = 'driver'
    
    alert(
        firstName +
		' is a ' +
		age +
		' year old ' +
		job +
		'.Is he married? ' +
		isMarried
        )
        
        var lastName = prompt('What is his last Name?')
        console.log(firstName + ' ' + lastName)
        */

/* ***********************
 * Basic operators
 */
/*
var year, yearJohn, yearMark
now = 2018
ageJohn = 28
ageMark = 33

// Math operators
var yearJohn = now - year
var yearMark = now - year

console.log(yearJohn)

console.log(now + 2)
console.log(now * 2)
console.log(now / 2)

// Logical operators
var johnOlder = ageJohn > ageMark
console.log(johnOlder)

// typeof operator
console.log(typeof johnOlder)
console.log(typeof ageJohn)
console.log(typeof 'Mark is older than John')
var x
console.log(typeof x)
*/

/* ***********************
 * Operator precedence
 */

// var now = 2018
// var yearJohn = 1989
// var fullAge = 18

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge // true
// console.log(isFullAge)

// //  Grouping
// var ageJohn = now - yearJohn
// var ageMark = 35
// var average = ageJohn + ageMark / 2
// console.log(average)

// // Multiple assignments
// var x, y
// x = y = (3 + 5) * 4 - 6 // 8 * 4 - 6 // 32 -6 // 26
// console.log(x)

// // More operators
// // x = x * 2
// x *= 2
// console.log(x)
// x += 10 // x = x + 10
// console.log(x)
// // x = x + 1 // Same as below
// // x += 1 // Same as below
// x++ // this operator simply adds one unit to the variable we are using this operator on. Easiest o write
// console.log(x)
// x--
// console.log(x)

// 11 - If else statements

/*****************************
 *  If / else statement
 */

// Make decisions using code

// var firstName = 'John'
// var civilStatus = 'married'
// console.log('Hello World')

// if (civilStatus === 'married') {
// 	console.log(firstName + ' is married!')
// } else {
// 	console.log(firstName + ' will hopefully marry soon :)')
// }

// var isMarried = false
// if (isMarried) {
// 	console.log(firstName + ' is married')
// } else {
// 	console.log(firstName + ' will hopefully marry soon :)')
// }

// //

// var massMark = 78 // Kg
// var heightMark = 1.69 // meters

// var massJohn = 92
// var heightJohn = 1.95

// var BMIMark = massMark / (heightMark * heightMark)
// var BMIJohn = massJohn / (heightJohn * heightJohn)
// console.log(BMIMark, BMIJohn)

// // var markHigherBMI = BMIMark > BMIJohn
// // console.log('Is Mark/+s BMI higher than John/´s? ' + markHigherBMI)

// if (BMIMark > BMIJohn) {
// 	console.log('Mark/`s BMI is higher than John/`s.')
// } else {
// 	console.log('John/`s BMI is higher than Mark/`s.')
// }

// console.clear()

// 12 - Boolean Logic

/*****************************
 *  Boolean Logic
 */

// var firstName = 'John'
// var age = 20

// if (age < 13) {
// 	console.log(firstName + ' is a boy.')
// } else if (age >= 13 && age < 20) {
// 	console.log(firstName + ' is a teenager.')
// } else if (age >= 20 && age < 30) {
// 	console.log(firstName + ' is a young man.')
// } else {
// 	console.log(firstName + ' is a man.')
// }

/************************************* *
The Ternary Operator and switch Statements
*/

// var firstName = 'John'
// var age = 14

// Ternary Operator
// age >= 18
// 	? console.log(firstName + ' drinks beer.')
// 	: console.log(firstName + ' drinks juice.')

// var drink = age >= 18 ? 'beer' : 'juice'
// console.log(drink)

/*if (age >= 18) {
	var drink = 'beer'
} else {
	var drink = 'juice'
}*/

// Switch statement
// var job = 'instructor'
// switch (job) {
// 	case 'teacher':
// 	case 'instructor':
// 		console.log(firstName + ' teaches kids how to code.')
// 		break
// 	case 'driver':
// 		console.log(firstName + ' drives an uber in Lisbon.')
// 		break
// 	case 'designer':
// 		console.log(firstName + ' design beautiful websites.')
// 		break
// 	default:
// 		console.log(firstName + ' does something else.')
// }

// age = 56
// switch (true) {
// 	case age < 13:
// 		console.log(firstName + ' is a boy.')
// 		break
// 	case age >= 13 && age < 20:
// 		console.log(firstName + ' is a teenager.')
// 		break
// 	case age >= 20 && age < 30:
// 		console.log(firstName + ' is a young man.')
// 		break
// 	default:
// 		console.log(firstName + ' is a man.')
// }

/************************************* *
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// var height

// height = 23

// if (height || height === 0) {
// 	console.log('Variable is defined')
// } else {
// 	console.log('Variable has not been  defined')
// }

// // Equality operators
// if (height == '23') {
// 	console.log('The == operator does type coercion!')
// }

/************************************* *
 * Functions
 */

// function calculateAge(birthYear, x, y) {
// 	return 2018 - birthYear
// }

// var ageJohn = calculateAge(1990)
// var ageMike = calculateAge(1948)
// var ageJane = calculateAge(1969)
// console.log(ageJohn, ageMike, ageJane)

// function yearsUntilRetirement(year, firstName) {
// 	var age = calculateAge(year)
// 	var retirement = 65 - age

// 	if (retirement > 0) {
// 		console.log(firstName + ' retires in ' + retirement + ' years.')
// 	} else {
// 		console.log(firstName + ' is already retired.')
// 	}
// }

// yearsUntilRetirement(1990, 'John')
// yearsUntilRetirement(1948, 'Mike')
// yearsUntilRetirement(1969, 'Jane')

/************************************* *
 * Functions Statements and Expressions
 */

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function Expression
// var whatDoYouDo = function (job, firstName) {
// 	switch (job) {
// 		case 'teacher':
// 			return firstName + ' teaches kids how to code.'
// 		case 'driver':
// 			return firstName + ' drives a cab in Lisbon.'
// 		case 'designer':
// 			return firstName + ' designs beautiful websites.'
// 		default:
// 			return firstName + ' does something else.'
// 	}
// }

// console.log(whatDoYouDo('teacher', 'John'))
// console.log(whatDoYouDo('designer', 'Jane'))
// console.log(whatDoYouDo('retired', 'Mark'))

// /************************************* *
//  * Arrays
//  */

// // Initialize new Array
// var names = ['John', 'Mark', 'Jane']
// var years = new Array(1990, 1969, 1948)

// console.log(names[2])
// console.log(names.length)

// // Mutate array data
// names[1] = 'Ben'
// names[names.length] = 'Mary'
// console.log(names)

// // Different data types
// var john = ['John', 'Smith', 1990, 'designer', false]

// john.push('blue')
// john.unshift('Mr.')
// console.log(john)

// john.pop()
// john.pop()
// john.shift()
// console.log(john)

// console.log(john.indexOf(23))

// var isDesigner =
// 	john.indexOf('designer') === -1
// 		? 'John is NOT a designer'
// 		: 'John IS a designer'
// console.log(isDesigner)

/************************************* *
 * Objects and properties
 */

// // Object literal
// var john = {
// 	firstName: 'John',
// 	lastName: 'Smith',
// 	birthYear: 1990,
// 	family: ['Jane', 'Mark', 'Bob', 'Emily'],
// 	job: 'teacher',
// 	isMarried: false,
// }
// console.log(john.firstName)
// console.log(john['lastName'])
// var x = 'birthYear'
// console.log(john[x])

// john.job = 'designer'
// john['isMarried'] = true
// console.log(john)

// // new Object syntax
// var jane = new Object()
// jane.firstName = 'Jane'
// jane.birthYear = 1969
// jane['lastName'] = 'Smith'
// console.log(jane)

/************************************* *
 * Objects and properties
 */

var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1992,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false,
	calcAge: function () {
		this.age = 2018 - this.birthYear
	},
}

john.calcAge()
console.log(john)
