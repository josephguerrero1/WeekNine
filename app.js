// Variables on user age and whether they are subscribed or not. userAge is an integer and is_subscribed is a boolean.
var userAge = 19;
var is_subscribed = true;

// if, else if, else conditional block with four possible combinations of the following scenarios: Whether the user is younger than 18 or not, and whether the user is subscribed or not. 
if (userAge < 18, is_subscribed = false) {
    console.log("The user is younger than 18 and not subscribed");
} else if (userAge < 18, is_subscribed = true) {
    console.log("The user is younger than 18 and is subscribed");
} else if (userAge >= 18, is_subscribed = false) {
    console.log("The user is 18 or older and not subscribed");
} else if (userAge >= 18, is_subscribed = true) {
    console.log("The user is 18 or older and is subscribed");
} else {
    console.log("Invalid");
}