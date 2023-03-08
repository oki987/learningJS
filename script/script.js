// console.log('Hi!');
// console.log('Hi!');

// const name = 'John'

// console.log(name);
// console.log(name);

// let age = 23

// age = 25

// let color

// color = "blue"

//------------------TASK 1------------------
/*const name = "Oskar";
let age = 21;
let favDish = "Schabowy"*/

//------------------TASK 2------------------
/*const name = "Oskar"
const animalName = "Puszek"

console.log(`Cześć, jestem ${name}, a to jest ${animalName} - mój piesek.`)

let animalAge = 5
console.log(animalName+" ma już "+animalAge+" lat!")*/

//------------------TASK 3------------------
/*const firstName = 'Tomek'
let age = 12
age = 18
 
let favColor = 'niebieski' //nie używamy var!
const favMeal = 'schabowy' //camelCase
 
let currentCar // . przy nazwie zmiennej
currentCar = 'Audi'
 
firstName = 'Ania' //tej samej nazwy nie deklarujemy
age = 24 //możemy użyć zmiennej wcześniejszej
favColor = 'czerwony' //nie nazwywamy nazwy zmiennej po polsku*/


//TYPES OF DATA

//String
/*const text = 'to jest sobie taki tekst'

console.log(text.length)
const newText = text.toUpperCase()
console.log(newText)

const date = new Date()

console.log(date.toLocaleDateString('en'))

const username = 'maciej'

const newName = username.charAt(0).toUpperCase() + username.slice(1)
console.log(newName)*/

//------------------TASK 1------------------
/*
    Metody do wykorzystania:
    charAt()-
    includes()-
    replace()* podchwytliwe 🙂 -
    slice()-
    split()
    toLowerCase()-
    toUpperCase()-

 
const text1 = 'powiększ mnie!'
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
const text4 = 'sprawdź, czy zawieram słowo "czy"'
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
const text7 = 'podziel, ten, string, od, przecinków'

console.log(text1.toUpperCase())
console.log(text2.toLowerCase())
console.log(text3.slice(6))
console.log(text4.includes('czy'))
console.log(text5.charAt(2))
console.log(text6.replaceAll('pies','kot'))
console.log(text7.split(','))*/

//Number
/*const num1 = 23
const num2 = "45dfgvg"
console.log(num1+num2) //konkatenacja (doklejanie)
console.log(num2*1) //NIE ROBIMY TEGO

const num3 = 1234.5676

console.log(num3.toFixed(2)) //zaokrąglanie

console.log(parseInt(num2))*/

//Boolean
// if(1){
//     console.log("TRUE")
// }else{
//     console.log("FALSE")
// }

//Null i undifined

//Objects and function
const colors = ['red','green','blue']
console.log(colors)

function test(){
    console.log('Siema tu funkcja')
}
test()

const person={
    name: 'LOL',
    age: 18,
    favColor: null
}

console.log(person)
