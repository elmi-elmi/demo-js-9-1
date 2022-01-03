"use strict";

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const openingHours = {
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
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is you delicious pasta with ${ing1},${ing2},${ing3} `);
  },
};
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// for(const day of days){
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we open at ${open}`)
// }

const properties = Object.keys(openingHours);
console.log(properties);

for (const day of Object.keys(openingHours)) console.log(day);
const values = Object.values(openingHours);
console.log(values);

const enteries = Object.entries(openingHours);
console.log(enteries);

for (const [key, { open, close }] of enteries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// Sets

const ordersSet = new Set(["Pasta", "Pizza", "Risotto", "Pasta", "Pizza"]);
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Noon"));
ordersSet.add("Noon Barbari");
ordersSet.delete("Risotto");
console.log(ordersSet);

const rest = new Map();
rest
  .set("open", 11)
  .set("close", 22)
  .set(true, "is open")
  .set(false, "is close");
const time = 1;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

const question = new Map([
  ["q", "what is the best?"],
  [1, "C"],
  [2, "Python"],
  [3, "Javascript"],
  ["Correct", 3],
  [true, "Correct"],
  [false, "fuck"],
]);
// console.log(question);
// console.log(question.get("q"));
// for (const [key, value] of question.entries()) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt("Your answer"));
//
// console.log(question.get(answer === question.get("Correct")));

// const checkMiddleSeat = function (seat) {
//   // E and B is middle seat
//   const lastLetter = seat.slice(-1);
//   if (lastLetter === "B" || lastLetter === "E")
//     console.log("this is middle seat");
//   else console.log("no not");
// };
// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");
const airline = "TAP Air Portugal";
const priceGB = "288,98E";
const priceUS = priceGB.replace(",", ".");
console.log(priceUS);

const announcment = "All passenger come to boarding door 23. door to go come;";
// announcment.replace(/door/, "gate");
// announcment.toUpperCase();
// console.log(announcment);
announcment.start;
const myName = "shahrokh++elmi";
console.log(myName.split("+"));

const newName = ["Mr. ", "Shahrokh", "emli".toUpperCase()].join("");
console.log(newName);

const passenger = "jessica ann smith devis";

const capitilizing = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(" "));
};
capitilizing("hi there is this what the fuc");
console.log("hi there".padStart(25, "--"));

// const makeCreditCart = function (cardNumber) {
//   console.log();
// };
// console.log("hi".repeat(4));
// const plan = "A320";
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const button = document.querySelector("button");

button.addEventListener("click", () => {
  const text = document.querySelector("textarea").value;
  camelCaseConverter(text);
});

const camelCaseConverter = function (word) {
  console.log(word);
  const words = word.trim().toLowerCase().split("_");
  console.log(words);
  const wordCamel = [words[0]];
  for (const w of words.slice(1)) {
    wordCamel.push(w.replace(w[0], w[0].toUpperCase()));
  }
  console.log(wordCamel.join(""));
};

camelCaseConverter("hi_there_fuck_you   ");

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const rows = flights.split("+");

// console.log(rows);
for (const row of rows) {
  const [typical, from, to, time] = row.split(";");

  console.log("-----------");
  console.log(
    `${typical.replaceAll("_", " ")} ${from.slice(0, 3).toUpperCase()} ${to
      .slice(0, 3)
      .toUpperCase()} ${time.replace(":", "h")}`
  );
}
// const rows = flights.split("+");
// const row = rows[0].split(";");
// row[0] = row[0].slice(1).split("_").join(" ");
// row[1] = row[1].slice(0, 3).toUpperCase();
// row[2] = row[2].slice(0, 3).toUpperCase();
// row[3] = "(" + row[3].slice(0, 2) + "h" + row[3].slice(3) + ")";
//
// console.log(row);
//
// const changeFormat = function (data) {
//   const row = data.split(";");
//
//   row[0] = row[0].slice(1).split("_").join(" ");
//   row[1] = row[1].slice(0, 3).toUpperCase();
//   row[2] = row[2].slice(0, 3).toUpperCase();
//   row[3] = "(" + row[3].slice(0, 2) + "h" + row[3].slice(3) + ")";
//   console.log(row.join(" "));
//   const formated = row[0] + " from " + row[1] + " to " + row[2] + " " + row[3];
//   return formated.padStart(45, "-");
// };
//
// const converter = function (str) {
//   const rows = str.split("+");
//   const table = [];
//   for (const row of rows) {
//     const res = changeFormat(row);
//     table.push(res);
//   }
//   console.log("****", table);
// };
//
// converter(flights);
// console.log(row[1].)
// console.log(airline.slice(4, 5));
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
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);
// console.log(gameEvents.values());
//
// const event = [...new Set(gameEvents.values())];
// console.log(event);
//
// gameEvents.delete(64);
// console.log(gameEvents);
//
// for (const [key, e] of gameEvents.entries()) {
//   console.log(`[${key < 45 ? "First Half" : "Second Half"}]: ${e}`);
// }

// challenge 2
//
// const scored = game.scored;
// for(const [i, g] of scored.entries()) console.log(`Goal ${i+1}: ${g}`)
//
// const odds = game.odds;
// const oddsValue = Object.values(odds)
// let average = 0;
// oddsValue.forEach(n=>average+=n)
// console.log(average/oddsValue.length)
//
// const oddsEntries = Object.entries(odds)
// console.log(oddsEntries)
// for(const [victory, odd] of oddsEntries) console.log(`Odd of ${game[victory]?game[victory]:'draw'}: ${odd}`)
//
// const players = [...game.players[0],...game.players[1]];
// const scorers = {};
// for(const player of players){
//   let counter = 0;
//   for(const g of game.scored){
//     if(g === player) counter++;
//   }
//   scorers[player] = counter;
// }
//
// console.log(scorers)

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
