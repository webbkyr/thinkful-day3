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
//     fum: 'fi',
//     quux: 'dog',
//     spam: 'email'
// }

// for (key in obj){
//     console.log(`${key} ${obj[key]}`);
// }

// const myMeals = {
//     meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// }
// console.log(Object.keys(myMeals).map(key => myMeals[key][3]));

// //simpler way to do it//
// console.log(myMeals.meals[3]);


let peopleArray = [
    person1 = {
        name: 'Ryan',
        job_title: 'Student'
    },
    person2 = {
        name: 'Kayla',
        job_title: 'Student'
    },
    person3 = {
        name: 'Bob',
        job_title: 'finance'
    }, 
    person4 = {
        name: 'Liz',
        job_title: 'doctor'
    }
]

console.log(peopleArray[0].name);

for(let i=0; i<peopleArray.length; i++){
  console.log(`${peopleArray[i].name} ${peopleArray[i].job_title}`);
}
//

console.log(Object.keys(myMeals).map(key => myMeals[key][3]));

console.log(myMeals.meals[3])


