/* Coding Challenge #1:
We need to write a function that will allow us to count books each time we get a new one in a delivery.
What variable would you assign the variable `bookCount` in the situation below.
Please replace the ** to make the function work.

** bookCount = 0

function increment(){
    bookCount +=1
}
increment() */

let bookCount = 0

function increment(){
    bookCount +=1
};
increment()
console.log(bookCount);
/* We have just sold 3 books and got 3 new ones!
What would you have to do here to the `books` variable for the function to work so it would replace the current books array with our 3 new ones?
Please make the function work.

const books = ['Moby Dick', 'Alice in Wonderland', 'Hungry Caterpillar']

function replaceBooks(){
    books = ['Life of Pi', 'Grokkings Algorithms', 'New Earth']
}
replaceBooks() */

let books = ['Moby Dick', 'Alice in Wonderland', 'Hungry Caterpillar']

function replaceBooks(){
    books = ['Life of Pi', 'Grokkings Algorithms', 'New Earth']
}
replaceBooks()
console.log(books);

/* We need to text our customer that their book is in. What would you have to do here in order for this function to work?

function textCustomer() {
    {
       let firstName = 'Molly' 
    }
    console.log('Hi ' + firstName + ', your book is now in')
}
textCustomer() */

function textCustomer() {
    {
       var firstName = 'Molly' 
    }
    console.log('Hi ' + firstName + ', your book is now in')
}
textCustomer()
console.log(textCustomer)

/*     Coding Challenge: Objects
Create an object that describes something of your choosing, like a car or animal.
Give that object 5 key/value pairs that include all primitive and complex data types
Give the object 1 method that uses the 'this' keyword to console log something from the object when called
console.log 2 properties from the object, once with 'dot' notation and once with 'bracket' notation. */

let myV8 = {
        manufacturer: {
            name: 'Bentley',
            parent: 'Volkswagen Group',
            location: 'Crewe, UK'
        },
        name:'Continental V8 Convertible',
        topSpeed:320,
        convertible: true,
        color:function() {
            console.log( 'My ' + this.manufacturer["name"] + ' ' + this.name + ' is blue!');
        },
    };

myV8.color();
console.log(myV8.manufacturer);
console.log(myV8.manufacturer["location"]);
console.log(myV8["topSpeed"]);


/* Add another object to the start of our gardenPlants array using the unshift method:

let gardenPlants = [ 
    {
        name: 'roses', 
        origin: 'China'
    },
    {
        name: 'tulips', 
        origin: 'Asia'
    },
] */

let gardenPlants = [ 
    {
        name: 'roses', 
        origin: 'China'
    },
    {
        name: 'tulips', 
        origin: 'Asia'
    },
];

gardenPlants.unshift({ name: 'safron', origin: 'Africa'});
console.log(gardenPlants);

/* Coding Challenge
Declare a variable username - stored as a string.
Declare a variable password - stored as a string.
Write an if-else statement,
if the username is incorrect, log incorrect
if the password is incorrect, log incorrect
else - both were correct and the user was able to log in */

let username = "cfnobleza"
let password = "12345"

if(password !== "12345" || username !== "cfnobleza"){
    console.log("Incorrect");
} else {
    console.log("Correct");
}
/* Create an if-else statement that logs if the object property is true or false

 var user = {
     name: "Bruce",
     email: null,
     friends: ["Aflred", "Robin"],
     address: {
         street: "123 wayne manor",
         city: "Gotham"
     },
     id: 0,
     nickname: undefined
 } */

 var user = {
    name: "Bruce",
    email: null,
    friends: ["Aflred", "Robin"],
    address: {
        street: "123 wayne manor",
        city: "Gotham"
    },
    id: 0,
    nickname: undefined
 }

 function checkProperty(user, property) {
    if(!user.hasOwnProperty(property)){
        return false;
    }
    if (user[property] === undefined) {
        return false;
    }
    if (user[property] === null) {
        return false;
    }
    return true;
}

console.log(checkProperty(user, "name"));
console.log(checkProperty(user, "friends"));
console.log(checkProperty(user, "nickname"));
console.log(checkProperty(user, "email"));
console.log(checkProperty(user, "alias"));