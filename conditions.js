/* comparisions & conditions are really important in javaScript. It helps us
for example to say if that condition is good, true then we can execute this 
particular code */

// == means equal to
// 5 == 5 True
// 5 == 4 False

// != means not equal
// 5 != 6 it's true
// 5 != 5 is false

// < > means greater than and less than
// 10 < 12 True
// 10 < 9 False
// 10 > 9 True
// 10 > 13 False

// All these above are really basic conditions that we can use

// Try to avoid using == but use === when we're using as a string
/* Conditions result of a bolean we have our if statement, then the 
parameter with the variable so if(variable) is true then we open braquets 
and execute a specific applicationCache. */

/*
const access = false;

if (access) {
  console.log(`Hey I'm tiktok famous`);
} else {
  console.log(`Cooooool`);
}  */

// here it will display coooool on the console cuz we changed the boolean to false

/* const age = 10;

if (age >= 18) {
  alert("Welcome to our website");
} else {
  alert("Your not an adult");
} */

// Above since we said that the age is 10 it will display the message of the else statement

/* We can make this more complexe, there are more logical operator
which are && which means 'and' we use it when we have mutiple varible 
to verify, we are another symbol that we can use wich is || and mean 'or', 
it will verify that at list one of your info is true... The last 
symbol is the not symbol != */

/* const age = 19;
const bank = 20;

if (age >= 18 && bank > 10) {
  alert("Welcome to our website");
} else {
  alert("Your not an adult");
} */

/* here it will say Welcome to our website cuz age is greater than 18
and bank is greater than 10 */

/* const age = 19;
const bank = 20;

if (age >= 13 || bank > 10) {
  alert("Welcome to our website");
} else {
  alert("Your not an adult");
} */

/* Above we are experimenting with the || sign and we can see that 
because our bank is over 10 the message Welcome to our website is going
to be display even if our age is below 18. */

/* const age = 19;
const bank = 10;

if (age != 13 && bank >= 10) {
  alert("Welcome to our website");
} else {
  alert("Your not an adult");
} */

/* Above an example of the if.. is not. In this particular situation 
we want to display our message only if age isn't 13 and bank is greater
or equal to 10 */

// Else if

/* important to, if we want to check the situation and deploy mutiple
scenario we can add else if statements*/

const age = 14;
const bank = 30;

if (age >= 18) {
  alert("Welcome to our website");
} else if (bank > 20) {
  alert("Welcome");
} else {
  alert("Your not an adult");
}

/* Here as soon as one statement is correct it will stop running, above 
we can see that we are below 18 so it will continue, then we saw that
we have over 30 in the bank to it will display the Welcome message of 
the esle if and it will stop there. We can add as much else if statement
as we want*/

// TRUTHY FALSE Values

const day = 0;

if (day) {
  console.log("This value is truthy");
} else {
  console.log("This value is falsey");
}

// FALSE, O, "", null, undefined, NaN (not a number)
