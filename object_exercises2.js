// const loaf = {
//     flour: 300,
//     water: 210,
//     hydration: function(){
//         return this.water/this.flour*100;
//     }
// }

// console.log(loaf.flour);
// console.log(loaf.water);

// console.log(loaf.hydration());

// const obj = {
//     foo: 'fee',
//     bar: 'boo',
// //     fum: 'fi',
// //     quux: 'dog',
// //     spam: 'email'
// // }

// // for (key in obj){
// //     console.log(`${key} ${obj[key]}`);
// // }

// // const myMeals = {
// //     meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// // }
// // console.log(Object.keys(myMeals).map(key => myMeals[key][3]));

// // //simpler way to do it//
// // console.log(myMeals.meals[3]);


// // let peopleArray = [
// //     person1 = {
// //         name: 'Ryan',
// //         job_title: 'Student',
// //         boss: 'Tim'
// //     },
// //     person2 = {
// //         name: 'Kayla',
// //         job_title: 'Student',
// //         boss: 'Casey'
// //     },
// //     person3 = {
// //         name: 'Bob',
// //         job_title: 'finance',
// //         boss: 'Angelina'
// //     }, 
// //     person4 = {
// //         name: 'Liz',
// //         job_title: 'doctor',
// //     }
// // ]

// // console.log(peopleArray[0].name);

// // for(let i=0; i<peopleArray.length; i++){
// //     const jobTitle = peopleArray[i].job_title;
// //     const name = peopleArray[i].name;
// //     const boss = peopleArray[i].boss;
// //     if (boss === undefined) {
// //         console.log(`${jobTitle} ${name} doesn't report to anybody.`);
// //     } else {
// //         console.log(`${jobTitle} ${name} reports to ${boss}.`)
// //     }
// //   console.log(`${peopleArray[i].name} ${peopleArray[i].job_title}`);
// // }

// // person5 = {
// //     name: 'michael',
// //     job_title: 'programmer'
// // }

// // console.log(person5.name);


// // function decode(message){
// //     let arr = message.split(' ');
// //     let result = '';
// //     for(let i=0; i < arr.length; i++){
// //         if(arr[i][0] === 'a'){
// //             result += arr[i][1];
// //         } else if (arr[i][0]=== 'b'){
// //             result += arr[i][2];
// //         } else if (arr[i][0]=== 'c'){
// //             result += arr[i][3];
// //         } else if (arr[i][0]=== 'd'){
// //             result += arr[i][4];
// //         }
// //     }
// //     console.log(result);
// // }
// // decode(message);

// const message = 'craft block argon meter bells brown croon droop';

// cipherObj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// };

// function decodingString(message){
//     let arr = message.split(' ');
//     let result = '';

//     for(let i=0; i<arr.length; i++){
//         if(arr[i][0] === 'a'){
//             result += arr[i][cipherObj.a];
//         } else if (arr[i][0]=== 'b'){
//             result += arr[i][cipherObj.b];
//         } else if (arr[i][0]=== 'c'){
//             result += arr[i][cipherObj.c];
//         } else if (arr[i][0]=== 'd'){
//             if(arr[i][cipherObj.d]){
//                 result += arr[i][cipherObj.d];
//             }
//         } else {
//             result += '';
//         }
//     }
//     console.log(result);
// }
// decodingString(message);


function createCharacter(name, nickname, race, origin, attack, defense) {
    // const validType = ['Gandalf the White', 'Biblo Baggins', 'Frodo Baggins', 'Aragorn son of Arathron', 'Legolas'];
    return {
        name, nickname, race, origin, attack, defense,
        describe: function() {
            return `${this.name} is a ${this.race} from ${this.origin}.`;
        },
        evaluateFight: function(character) {
            let x = this.attack;
            let y = this.defense;
            if (y > x) {
                return `Your opponent takes ${x} and you recieve zero damage.`;
            } else {
                return `Your opponent takes ${x} and you recieve ${y} damage.`;
            }
        }        
    }
}

// const character = createCharacter('Legolas','legolas', 'Elf', 'Woodland realm', 8, 5);
// console.log(character.describe());

const Arwen = createCharacter('Arwen Undomiel','arwen','Half-Elf','RivenDell', 5, 7);
// console.log(Arwen.describe());

const characterArray = [
    gandolf = createCharacter('Gandalf the White','gandalf','Wizard','Middle Earth', 10, 6),
    bilbo = createCharacter('Bilbo Baggins','bilbo','Hobbit','The Shire', 2, 1),
    frodo = createCharacter('Frodo Baggins','frodo','Hobbit','The Shire', 3, 2),
    aragorn = createCharacter('Aragorn son of Arathorn','aragorn','Man','Dunnedain', 6, 8),
    legolas = createCharacter('Legolas','legolas','Elf','Woodland Realm', 8, 5) 
];


characterArray.find(function(characterArray){
    if(characterArray.nickname === 'aragorn'){
        console.log(aragorn.describe());
    }
});