let pokemonList = [
  {name: 'Bulbasaur', height: 2, types: ['grass', 'poison']},
  {name: 'Ivysaur', height: 3, types: ['grass', 'poison']},
  {name: 'Venusaur', height: 6, types: ['grass', 'poison']}
];

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height >= 5) {
      document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ' + '- Wow, that\'s big!' + '<br>');
  } else {
      document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ' +'<br>');
  }
}














// CONDITIONAL EXAMPLE

// let day = 'Saturday';
// if (day = 'Saturday' || day = 'Sunday') {
//   console.log("It's the weekend!");
// } else {
//   console.log("It's not the weekend.")
// }


//FOR LOOP EXAMPLE - INITIALIZATION, CONDITION, ACTION

// let person = [
//   {name: 'brian', age: 16},
//   {name: 'lisa', age: 10},
//   {name: 'cole', age: 25}
// ];

// for (let i = 0; i < person.length; i++) {
//     if (person[i].age < 20 && person[i].age > 12) {
//         console.log(person[i].name + ' is a teenager');
//     } else if (person[i].age < 13) {
//         console.log(person[i].name + ' is a child');
//     } else {
//         console.log(person[i].name + ' is an adult');
//     }
// }


// WHILE LOOP EXAMPLES

// let fruits = ['apple', 'banana', 'orange', 'grape']
// let text = '';
// let i = 0;
//
// while (fruits[i]) {
//   text = text + '' + fruits[i];
//   i++;
// }
//
// console.log(text);


// let i = 1;
//
// do {
//  console.log(i);
// i++
// }
// while ( i < 5)
