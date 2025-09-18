// ************Chapter 21-25************


// **Question#1**

// var firstname = prompt("Enter your first name").toUpperCase();
// var lastname = prompt("Enter your last name").toUpperCase();

// alert(firstname + " " + lastname + " Welcome to our website");


// **Question#2**

// var mobile = prompt("Enter your favorite phone").toUpperCase();
// var stringlength = (mobile.length)

// document.write("My favorite mobile is: " + mobile + "<br>");
// document.write("Length of string is: " + stringlength);


// **Question#3**

// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("string: " + word + "<br>" + "index of 'n': " + index )


// **Question#4**

// var word = "Hello World!";
// var index = word.lastIndexOf("l");
// document.write("string: " + word + "<br>" + "index of 'l': " + index )


// **Question#5**

// var word = "Pakistani";
// document.write("string: " + word + "<br>" + "Character at index 3: " + word [3])



// **Question#6**

// var firstname = prompt("Enter your first name").toUpperCase();
// var lastname = prompt("Enter your last name").toUpperCase();

// alert(firstname.concat( lastname, " Welcome to our website"));



// **Question#7**


// var word = "Hyderabad";

// document.write("City: " , word , "<br>")

// document.write("After replacement: " , word.replace("Hyder" , "Islam"))



// **Question#8**

// var word = "Ali and Sami are best friends. They play cricket and football together ";

// document.write("Var message- " + word , "<br>")

// document.write("After replacement: " , word.replaceAll("and" , "&"))


// **Question#9**

// var value = "472"
// document.write( "Value: " , value , "<br>" , "Type: " , typeof value , "<br>")

// var value = +"472"
// document.write( "Value: " , value , "<br>" , "Type: " , typeof value)


// **Question#10**

// var word = "Peanuts";
// var upper = word.toUpperCase();

// document.write("User input: " , word , "<br>")
// document.write("User input: " , upper)



// **Question#11**

// var userInput = prompt("Enter any word:");

// var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

// document.write("User input: " + userInput + "<br>" + "Title case: " + titleCase);



// **Question#12**

// var num = 35.36
// var convert = num.toString( ).replace("." , "");
// document.write("Number: " , num + "<br>")
// document.write("Result: " , convert)


// **Question#13**

// var user = prompt("Enter userName:")
// for(var i=0;i<user.length;i++){
//         if(user[i].charCodeAt("!") === 33 || user[i].charCodeAt(",") === 44 || user[i].charCodeAt(".") === 46 || user[i].charCodeAt("@") === 64 ){
//                 alert("Please enter a valid userName")
//         }
// }
// alert(user)



// **Question#14**

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome! What do you want to order?").toLowerCase();

// if (A.includes(userInput)) {
//     alert(userInput + " is available at index " + A.indexOf(userInput) + " in our bakery.");
// } else {
//     alert("We are sorry, " + userInput + " is not available in our bakery.");
// }



// **Question#15**

// let password;
// let isValid = false;

// while (!isValid) {
//     password = prompt("Enter your password:\n(At least 6 characters, must contain letters and numbers, and cannot start with a number)");

//     let hasAlphabet = false;
//     let hasDigit = false;

//     if (password.length >= 6) {
    
//         if (isNaN(password.charAt(0))) {
           
//             for (let i = 0; i < password.length; i++) {
//                 let ch = password.charAt(i);
//                 if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
//                     hasAlphabet = true;
//                 }
//                 if (ch >= '0' && ch <= '9') {
//                     hasDigit = true;
//                 }
//             }

//             if (hasAlphabet && hasDigit) {
//                 isValid = true;
//                 alert("Password accepted!");
//             }
//         }
//     }

//     if (!isValid) {
//         alert("Invalid password. Try again.");
//     }
// }



// **Question#16**

//  var str = "University of Karachi";
//         var letters = str.split("");

//         for (let i = 0; i < letters.length; i++) {
//             document.write(letters[i] + "<br>");
//         }



// **Question#17**

// var userInput = prompt("Enter a word..")
// var lastcharacter = userInput.charAt(userInput.length - 1);

// document.write("User Input: " , userInput , "<br>" , "Last character of input: " , lastcharacter)



// **Question#18**

// var str = "The quick brown fox jumps over the lazy dog";

// var lowerStr = str.toLowerCase();

// var words = lowerStr.split(" ");

// var count = 0;

// for (let i = 0; i < words.length; i++) {
//     if (words[i] === "the") {
//         count++;
//     }
// }

// document.write("Text: " + str , "<br>");
// document.write("There are " + count + " occurrence's of 'the'");






// ************Chapter 26-30************



// **Question#1**

// var user = prompt("Enter a positive integer in decimal");

// document.write("Number: " , user , "<br>" , "Round off value: " , Math.round(user) , "<br>" , "ceil value: " , Math.ceil(user) , "<br>" , "floor value: " , Math.floor(user))



// **Question#2**


// var user = prompt("Enter a nagative integer in decimal");

// document.write("Number: " , user , "<br>" , "Round off value: " , Math.round(user) , "<br>" , "ceil value: " , Math.ceil(user) , "<br>" , "floor value: " , Math.floor(user))




// **Question#3**

// let input = prompt("Enter a number:");

// let number = Number(input);

// let absoluteValue = Math.abs(number);

// document.write("The absolute value of " + number + " is: "  + absoluteValue);



// **Question#4**

// document.write("Random Dice Value: " + Math.round( Math.random() *6) + "<br>" + "<br>")

// document.write("Random Dice Value: " + Math.round( Math.random() *6))



// **Question#5**

// document.write(Math.floor( Math.random() *2) + 1 + "<br>" + "Random Coin Value: Heads " +  "<br>")

// document.write(Math.floor( Math.random() *2) + 1 + "<br>" + "Random Coin Value: Tails " +  "<br>")



// **Question#6**

// document.write( "Random Number Between 1 - 100:  " + Math.round( Math.random() *100)  +  "<br>")



// **Question#7**

// var weight = parseFloat(prompt("Enter Your Weight in kgs.."))

// document.write ("The Weight of the user is " , weight , " Kilograms")



// **Question#8**

// var secret = +"6"

// var user = +prompt("Guess and Enter the secret number between 1-10")

// if(user === secret){
//     alert("Wohooo! you guessed the correct Number...")
// }else{
//     alert("Try Again!!")
// }







