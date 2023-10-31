//https://github.com/Asabeneh/30-Days-Of-React/blob/master/01_Day_JavaScript_Refresher/01_javascript_refresher.md




console.log("Hello mom");


let fname = 'Brandon'
let lname = 'Ramirez'
const e = 2.71;

// syntax
// This the most recommended way to create an empty list
const arr = [3,6,2,5,7,4,2,1]
console.log(arr)

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const countries = ['Finland', 'Denmark', 'Sweden']

console.log("Number of numbers: " + numbers.length)
console.log("Numbers: " + numbers)
console.log("Numbers: ", numbers)

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let firstFruit = fruits[0] // we are accessing the first item using its index
console.log(firstFruit) // banana


let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]
console.log(lastFruit) // lemon


const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]



const numbers0 = [1, 2, 3, 4, 5]

console.log(numbers0.indexOf(5)) // -> 4




const fruits0 = ['banana', 'orange', 'mango', 'lemon']
let index = fruits0.indexOf('banana') // 0



console.log(numbers.lastIndexOf(2)) // 7
console.log(numbers.includes(5)) // true
console.log(Array.isArray(numbers)) // true
console.log(numbers.toString()) // 1,2,3,4,5
console.log(numbers.slice(1, 4)) // -> [2,3,4] // it doesn't include the ending position
numbers.pop() // -> remove one item from the end
numbers.shift() // -> remove one item from the beginning
numbers.unshift(0) // -> add one item from the beginning
numbers.reverse() // -> reverse array order


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]
  
  webTechs.sort()
  webTechs.reverse();


let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}
//  3 is a positive number
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')











































