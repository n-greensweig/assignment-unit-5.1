console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Noah',
  lastName: 'Greensweig',
  hasSiblings: true,
  shoeCount: 9,
  favThreeFoods: ['Gold kiwis', 'Refried beans', 'Risotto']
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = `${me.firstName} ${me.lastName}`;
console.log(fullName);

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log(me.favThreeFoods[0]);
console.log(me.favThreeFoods[2]);


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log(me.shoeCount);
me.shoeCount += 1;
console.log(me.shoeCount);

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'Green';
console.log(me);
console.log(me.favoriteColor);

// Add object info to the DOM
let aboutMe = document.querySelector(`#about-me`);
aboutMe.innerHTML = '';
aboutMe.innerHTML = `
<h2>About ${fullName}</h2>
<p>${me.firstName} has ${me.shoeCount} pairs of shoes</p>
<p>${me.firstName}'s three favorite foods are ${me.favThreeFoods.join(', ').toLowerCase()}</p>
<p>${me.firstName}'s favorite color is ${me.favoriteColor}</p>
`;