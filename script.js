'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const openingHours =  {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  },
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is you delicious pasta with ${ing1},${ing2},${ing3} `)
  }
};
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
const days = ['sun','mon','tue','wed','thu', 'fri','sat'];

// for(const day of days){
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we open at ${open}`)
// }

const properties = Object.keys(openingHours);
console.log(properties)

for (const day of Object.keys(openingHours)) console.log(day);
const values = Object.values(openingHours);
console.log(values)

const enteries = Object.entries(openingHours);
console.log(enteries);

for(const[ key, {open,close}] of enteries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// const user = [{name:'shahrokh', email:'hello@shahrokh.io'}]
// console.log(user[0]?.name ?? 'User array empty')
// for(const item of menu.entries()) console.log(item);
// console.log(restaurant.openingHours?.mon?.open)
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

// challenge 2

const scored = game.scored;
for(const [i, g] of scored.entries()) console.log(`Goal ${i+1}: ${g}`)

const odds = game.odds;
const oddsValue = Object.values(odds)
let average = 0;
oddsValue.forEach(n=>average+=n)
console.log(average/oddsValue.length)

const oddsEntries = Object.entries(odds)
console.log(oddsEntries)
for(const [victory, odd] of oddsEntries) console.log(`Odd of ${game[victory]?game[victory]:'draw'}: ${odd}`)

const players = [...game.players[0],...game.players[1]];
const scorers = {};
for(const player of players){
  let counter = 0;
  for(const g of game.scored){
    if(g === player) counter++;
  }
  scorers[player] = counter;
}

console.log(scorers)

// challenge 1
// // 1
// const player1 = game.players[0];
// const player2 = game.players[1];
// console.log(player1);
// console.log(player2);
// // 2
// const [gk, ...fieldPlayer] = player1;
// console.log(gk);
// console.log(fieldPlayer);
// // 3
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);
// // 4
// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// // 5
// // const team1 = game.odds.team1;
// // const team2 = game.odds.team2;
// // const draw = game.odds.x;
// // const {team1,team2,x} = game.odds;
// const {odds:{team1,x:draw,team2}} = game;
// console.log(team1,team2,draw);
//
// const printGoals = function(...players){
//
// }