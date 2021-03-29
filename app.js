// Variables on user age and whether they are subscribed or not. userAge is an integer and is_subscribed is a boolean.

// var userAge = 19;
// var is_subscribed = true;

// if, else if, else conditional block with four possible combinations of the following scenarios: Whether the user is younger than 18 or not, and whether the user is subscribed or not. 

// if (userAge < 18 && is_subscribed === false) {
//     console.log("The user is younger than 18 and not subscribed");
// } else if (userAge < 18 && is_subscribed === true) {
//     console.log("The user is younger than 18 and is subscribed");
// } else if (userAge >= 18 && is_subscribed === false) {
//     console.log("The user is 18 or older and not subscribed");
// } else if (userAge >= 18 && is_subscribed === true) {
//     console.log("The user is 18 or older and is subscribed");
// } else {
//     console.log("Invalid");
// }

// Created an array for userAges and subscriptionStatus, they are both the same length.
var userAges = [16, 21, 25, 28];
var subscriptionStatus = [true, false, false, true];

// Created a for loop that goes through the arrays of userAges and subscriptionStatus. if, else if, else conditional block with four possible combinations of the following scenarios: Whether the user is younger than 18 or not, and whether the user is subscribed or not. 

for (var index = 0; index < userAges.length; index++) {

    var userAge = userAges[index];
    var is_subscribed = subscriptionStatus[index]; 

    if (userAge < 18 && is_subscribed === false) {
    console.log("The user is younger than 18 and not subscribed");
    } else if (userAge < 18 && is_subscribed === true) {
        console.log("The user is younger than 18 and is subscribed");
    } else if (userAge >= 18 && is_subscribed === false) {
        console.log("The user is 18 or older and not subscribed");
    } else if (userAge >= 18 && is_subscribed === true) {
        console.log("The user is 18 or older and is subscribed");
    } else {
        console.log("Invalid");
    }
}

// Same thing but a while loop instead of a for loop
var counter = 0;
while (counter < userAges.length) {
    var userAge = userAges[counter];
    var isSubscribed = subscriptionStatus[counter];

    if (userAge < 18 && is_subscribed === false) {
        console.log("The user is younger than 18 and not subscribed");
    } else if (userAge < 18 && is_subscribed === true) {
        console.log("The user is younger than 18 and is subscribed");
    } else if (userAge >= 18 && is_subscribed === false) {
        console.log("The user is 18 or older and not subscribed");
    } else if (userAge >= 18 && is_subscribed === true) {
        console.log("The user is 18 or older and is subscribed");
    } else {
        console.log("Invalid");
    }
    counter++
}