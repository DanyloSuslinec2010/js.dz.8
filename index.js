const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";

for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ", ";
  }
}
console.log("Через for:", string);

const joined = friends.join(", ");
console.log("Через join():", joined);
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

console.log("Початковий масив:", cards);

const cardToRemove = "Карточка-3";
const indexToRemove = cards.indexOf(cardToRemove);

if (indexToRemove !== -1) {
  cards.splice(indexToRemove, 1);
}
console.log("Після видалення:", cards);

const cardToInsert = "Карточка-6";
const insertIndex = 2;
cards.splice(insertIndex, 0, cardToInsert);
console.log("Після додавання:", cards);

const cardToUpdate = "Карточка-4";
const indexToUpdate = cards.indexOf(cardToUpdate);

if (indexToUpdate !== -1) {
  cards.splice(indexToUpdate, 1, "Оновлена Карточка-4");
}
console.log("Після оновлення:", cards);
