'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function(starterIndex, mainIndex){
//     return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
//   },
//   orderPasta: function(ing1, ing2, ing3){
//     console.log(`Here is you delicious pasta with ${ing1},${ing2},${ing3} `)
//   }
// };
// const ingredients = [prompt('Let\'s make pasta! ing1?'),prompt(' ing2?'),prompt(' ing3?')]
// restaurant.orderPasta(...ingredients);
// const someValue = undefined ?? 10;
// console.log(someValue)
// console.log('hi' &&'why')
// const arr = [1,2,[4,5]];
// const [x=199,,[y,z], a=3] = arr;
//
// console.log(x,y,z,a);
// const {name:hi} = restaurant;
// console.log(hi)
//
// let a = 1;
// let b = 2;
//
// const ob = {a:10, b:20};
// console.log(ob);
//
// ({a,b} = ob);
// console.log(a,b);

// const arr = [7,8,9];
// const googNewArr = [1,2,...arr];
// console.log(googNewArr)


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1
const player1 = game.players[0];
const player2 = game.players[1];
console.log(player1);
console.log(player2);
// 2
const [gk, ...fieldPlayer] = player1;
console.log(gk);
console.log(fieldPlayer);
// 3
const allPlayers = [...player1,...player2];
console.log(allPlayers);
// 4