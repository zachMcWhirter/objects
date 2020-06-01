// const mustang = {
//     year: 1969,
//     color: "black",
//     engine: "V8"
// }

// console.log("My mustang has these specs", mustang);


// // New Exercise *****************

// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }

// console.log(wardrobe.height);
// console.log(wardrobe.manufacturer);
// console.log(wardrobe.contents);
// console.log(wardrobe.depth);
// console.log(wardrobe.width);

// wardrobe.material = "Cedar";

// console.log(wardrobe.material);
// console.log(wardrobe);


// NEW EXERCISE ********************

// const lassie = {
//     age: 7,
//     breed: "Collie",
//     color: "White and Brown"
// }

// // Square bracket notation for key access
// console.log(lassie["breed"]);

// // Dot notation for key access
// console.log(lassie.breed);

// // Breed is the key you want to get the value of in the object below
// const keyToLookup = "breed";

// // First, make JavaScript evaluate the variable and give us its value
// console.log(keyToLookup);

// // Use the value of `keyToLookup` to get the value you want
// const lassiesBreed = lassie[keyToLookup];
// console.log(lassiesBreed);
// console.log(lassie[keyToLookup]);


// NEW EXERCISE ******************

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(`The Empire State Building is ${empireStateBuilding.height} feet tall, ${empireStateBuilding.eastWestLength} feet east to west, and ${empireStateBuilding.northSouthLength} north to south.`)

var lookupKey = "address";
const empireStateBuildingAddress = empireStateBuilding[lookupKey];
console.log(`The address is ${empireStateBuilding[lookupKey]}`);

var lookupKey = "squareFeet";
const empireStateBuildingSqft = empireStateBuilding[lookupKey];
console.log(`There are ${empireStateBuilding[lookupKey]} sqft in the building.`);

var lookupKey = "constructionDate"
const empireStateBuildingConstruction = empireStateBuilding[lookupKey];
console.log(`The Empire State Building was constructed in ${empireStateBuilding[lookupKey]}`);

var lookupKey = "cost";
const empireStateBuildingCost