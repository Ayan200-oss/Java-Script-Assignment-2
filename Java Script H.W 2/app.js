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




// ************Chapter 31-34************



// **Question#1**

// var date = new Date();

// document.write(date + "<br>")


// **Question#2**

// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// var date = new Date();
// var currentMonth = month[date.getMonth()];
// document.write("Current Month: " + currentMonth + "<br>");



// **Question#3**

// var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var date = new Date();
// var currentDay = day[date.getDay()];
// document.write("Today is: " + currentDay + "<br>");


// **Question#4**

// var message;

// var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var currentDay = day[date.getDay()];
// if (currentDay === "Sun" || currentDay === "Sat") {
//     message = "It's Fun day";
//     alert(message);
// }   else {
//     message = "It's a working day";
//     alert(message);
// }


// **Question#5**

// var date = new Date();
// var currentDate = date.getDate();
// if (currentDate < 16) {
//     document.write("First fifteen days of the month" + "<br>");
// }
// else {
//     document.write("Last days of the month" + "<br>");
// }


// **Question#6**

// var date = new Date();
// var milliseconds = date.getTime();
// var minutes = milliseconds / (1000 * 60);
// document.write("Current Date: " + date + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + milliseconds + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + minutes + "<br>");


// **Question#7**

// var date = new Date();
// var hours = date.getHours();
// if (hours < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }


// **Question#8**

// var laterDate = new Date("December 31, 2020");
// document.write("Later Date: " + laterDate + "<br>");


// **Question#9**

// var ramadanDate = new Date("June 18, 2015");
// var currentDate = new Date();
// var timeDiff = currentDate - ramadanDate;
// var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
// document.write(daysDiff + " days have passed since 1st Ramadan, 2015" + "<br>");


// **Question#10**

// var referenceDate = new Date("December 5, 2015");
// var currentDate = new Date();
// var timeDiff = currentDate - referenceDate;
// var secondsDiff = Math.floor(timeDiff / 1000);
// document.write("On reference date " + referenceDate + ",<br>" + secondsDiff + " seconds had passed since beginning of 2015" + "<br>");


// **Question#11**

// var currentDate = new Date();
// var currenthours = currentDate.getHours();
// currentDate.setHours(currenthours - 1);
// document.write("Current date: " + new Date() + "<br>");
// document.write("1 hour ago, it was " + currentDate + "<br>");


// **Question#12**

// var currentDate = new Date();
// var currentyear = currentDate.getFullYear();
// currentDate.setFullYear(currentyear - 100);
// alert("Current date: " + new Date());
// document.write("100 years back, it was " + currentDate + "<br>");



// **Question#13**

// var age = +prompt("Enter your age..")

// var date = new Date();
// var currentyear = date.getFullYear();
// var birthyear = currentyear - age;
// document.write("Your age is " + age + "<br>" + "Your birth year is " + birthyear + "<br>");



// **Question#14**

// document.write("<h1>K-Electric Bill</h1>" + "<br>");

// // Asking customer name
// var costname = prompt("Enter your name..");
// var upper = costname[0].toUpperCase() + costname.slice(1).toLowerCase();
// document.write("Customer Name: " + upper + "<br>");

// // Getting current month
// var currentdate = new Date();
// var month = currentdate.getMonth(); // Months start from 0
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.write("Month: " + months[month] + "<br>");

// // Units and charges
// var units = 410;
// document.write("Number of units: " + units + "<br>");

// var chargesperunit = 16;
// document.write("Charges per unit: " + chargesperunit + "<br><br>");

// // Calculations
// var netamount = units * chargesperunit;
// document.write("Net Amount Payable (within Due Date): " + netamount + "<br>");

// var latepayment = 350;
// document.write("Late Payment Surcharge: " + latepayment + "<br>");

// var lateamount = netamount + latepayment;
// document.write("Gross Amount Payable (after Due Date): " + lateamount + "<br>");




// ************Chapter 35-38************



// **Question#1**

// function date(){
//     var date = new Date();
//     document.write(date)
// }
// date ()


// **Question#2**

// function greet(){
//     var firstname = prompt("Enter your first name").toUpperCase();
//     var lastname = prompt("Enter your last name").toUpperCase();
//     document.write("Welcome " + firstname + " " + lastname + " to our website")
// }
// greet()



// **Question#3**

// function add(){
//     var num1 = +prompt("Enter first number");
//     var num2 = +prompt("Enter second number");
//     var sum = num1 + num2;
//     alert("The sum is: " + sum);
// }
// add()



// **Question#4**

// function calc(){
//     var num1 = +prompt("Enter first number");
//     var operator = prompt("Enter operator (+, -, *, /, %)");
//     var num2 = +prompt("Enter second number");
//     var result;
//     if(operator === "+"){
//         result = num1 + num2;
//         alert("The result is: " + result);
//     } else if(operator === "-"){
//         result = num1 - num2;
//         alert("The result is: " + result);
//     } else if(operator === "*"){
//         result = num1 * num2;
//         alert("The result is: " + result);
//     } else if(operator === "/"){
//         result = num1 / num2;
//         alert("The result is: " + result);
//     } else if(operator === "%"){
//         result = num1 % num2;
//         alert("The result is: " + result);
//     } else{
//         alert("Invalid operator");
//         return;
//     }
// }
// calc()


// **Question#5**

// function square(){
//     var num = +prompt("Enter a number for squaring");
//     var square = num * num;
//     alert("The square of " + num + " is: " + square);
// }
// square()


// **Question#6**

// function factorial(){
//     var num = +prompt("Enter a number to find its factorial");
//     var fact = 1;
//     for(var i = 1; i<= num; i++){
//         fact = fact*i;

//     }
//     alert("The factorial of " + num + " is: " + fact);
// }
// factorial()



// **Question#7**

// function count(){
//     var start = +prompt("Enter starting number");
//     var end = +prompt("Enter end number");

//     for (var i = start; i<=end; i++){
//         document.write(i + "<br>")
//     }
// }
// count()









