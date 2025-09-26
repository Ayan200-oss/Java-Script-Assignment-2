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


// **Question#8**

// function hypotenuse(base, perpendicular) {
//     function square(x) { return x * x; }
//     return Math.sqrt(square(base) + square(perpendicular));
// }
// var base = parseInt(prompt("Enter base:"));
// var perpendicular = parseInt(prompt("Enter perpendicular:"));

// var result = parseInt(hypotenuse(base, perpendicular));
// alert("The Hypotenuse is: " + result);


// **Question#9**

// function area(width, height) {
//     return width * height;
// }

// // i. Passing arguments as values
// console.log("Area (values):", area(5, 10));  

// // ii. Passing arguments as variables
// let w = 7;
// let h = 4;
// console.log("Area (variables):", area(w, h));



// **Question#10**

// function palindrome(str) {
//     var cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//     var reversed = cleaned.split('').reverse().join('');
//     return cleaned === reversed;
// }
// var userInput = prompt("Enter a word or phrase:");
// if (palindrome(userInput)) {
//     alert(userInput + " is a palindrome.");
// } else {
//     alert(userInput + " is not a palindrome.");
// }



// **Question#11**

// function upper(str) {
//     var words = str.toLowerCase().split(" ");
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }
// var userInput = prompt("Enter a sentence:");
// var result = upper(userInput);
// document.write("Original String: " + userInput + "<br>");
// document.write("Upper Case: " + result + "<br>");



// **Question#12**

// function longestWord(str) {
//     var words = str.match (/\w[a-z]{0,}/gi);
//     var longest = "";
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }
//     return longest;
// }
// var userInput = prompt("Enter a sentence:");
// var result = longestWord(userInput);
// document.write("Original String: " + userInput + "<br>");
// document.write("Longest Word: " + result + "<br>");



// **Question#13**

// function countLetter(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
//             count++;
//         }
//     }
//     return count;
// }
// var userInput = prompt("Enter a sentence:");
// var letter = prompt("Enter a letter to count its occurrences:");
// var result = countLetter(userInput, letter);
// document.write("Original String: " + userInput + "<br>");
// document.write("Letter to count: " + letter + "<br>");
// document.write("Number of occurrences of letter '" + letter + "': " + result + "<br>");



// **Question#14**

// function calcCircumference(radius) {
//     let circumference = 2 * Math.PI * radius;
//     let area = Math.PI * radius * radius;
//     alert("The area is " + area.toFixed(2) + "\n" + "The circumference is " + circumference.toFixed(2));
// }

// let radius = parseFloat(prompt("Enter the radius of the circle:"));

// calcCircumference(radius);




// ************Chapter 39-42************

// **Question#1**

// function power(a, b) {
//     let result = 1;

//     for (let i = 1; i <= b; i++) {
//         result = result * a;
//     }

//     return result;
// }

// alert(power(2, 3));  
// alert(power(5, 2));  
// alert(power(7, 0));  



// **Question#2**

// function LeapYear(year) {
//     switch (true) {
//         case (year % 400 === 0):
//             return true;
//         case (year % 100 === 0):
//             return false;
//         case (year % 4 === 0):
//             return true;
//         default:
//             return false;
//     }
// }

// let year = parseInt(prompt("Enter a year:"));

// if (LeapYear(year)) {
//     alert(year + " is a leap year.");
// } else {
//     alert(year + " is not a leap year.");
// }


// **Question#3**




// **Question#4**

// function calculateAverage(subject1, subject2, subject3) {
//     return (subject1 + subject2 + subject3) / 3;
// }

// function calculatePercentage(subject1 , subject2 , subject3) {
//     let totalMarks = 300; 
//     let obtainedMarks = subject1 + subject2 + subject3;
//     return (obtainedMarks / totalMarks) * 100;
// }

// function mainFunction() {
//     let subject1 = parseFloat(prompt("Enter marks of subject 1:"));
//     let subject2 = parseFloat(prompt("Enter marks of subject 2:"));
//     let subject3 = parseFloat(prompt("Enter marks of subject 3:"));

//     let avg = parseInt(calculateAverage(subject1 , subject2 , subject3));
//     let perc = calculatePercentage(subject1 , subject2 , subject3);

//     alert("Average marks: " + avg + "\nPercentage: " + perc.toFixed(2) + "%");
// }

// mainFunction();



// **Question#5**




// **Question#6**

// function removeVowels(sentence) {
//     var result = "";
//     var vowels = "aeiouAEIOU";

//     for (let i = 0; i < sentence.length; i++) {
//         if (!vowels.includes(sentence[i])) {
//             result += sentence[i]; // add non-vowel characters
//         }
//     }

//     return result;
// }

// // Example usage
// var sentence = prompt("Enter a sentence (max 25 characters):");
// if (sentence.length > 25) {
//     alert("Sentence is too long! Please enter 25 characters or less.");
// } else {
//     var noVowels = removeVowels(sentence);
//     alert("Sentence without vowels: " + noVowels);
// }



// **Question#7**

// function countDoubleVowels(text) {
//     let count = 0;
//     text = text.toLowerCase(); 

//     for (let i = 0; i < text.length - 1; i++) {
//         let first = text[i];
//         let second = text[i + 1];

//         switch (true) {
//             case (first === 'a' || first === 'e' || first === 'i' || first === 'o' || first === 'u'):
//                 switch (true) {
//                     case (second === 'a' || second === 'e' || second === 'i' || second === 'o' || second === 'u'):
//                         count++;
//                         break;
//                 }
//                 break;
//         }
//     }

//     return count;
// }

// let sentence = prompt("Enter a line of text:");
// let doubleVowels = countDoubleVowels(sentence);
// alert("Number of occurrences of two vowels in succession: " + doubleVowels);



// **Question#8**

// function tometers(km) {
//     return km * 1000;
// }


// function tofeets(km) {
//     return km * 3280;
// }


// function toinches(km) {
//     return km * 39370.1;
// }


// function tocentimeters(km) {
//     return km * 100000;
// }

// var km = prompt("Enter the distance B/W to cities in km: ");
// console.log("The distane between two cities are: " + km );
// console.log("Distane in meters: " + tometers(km) );
// console.log("Distane in feets: " + tofeets(km) );
// console.log("Distane in inches: " + toinches(km) );
// console.log("Distane in centimeters: " + tocentimeters(km) );



// **Question#9**

// function calovertimepay(workedhours) {
//     const normalhours = 40;
//     const overtimerate = 12;
//     var overtimepay = 0;

//     if (workedhours > normalhours) {
//         var overtimehours = workedhours - normalhours;  
//        overtimepay = overtimehours * overtimerate
//     }
//     return overtimepay
// }
// var workedhours = 45
// var overtimepay = calovertimepay(workedhours);

// alert("Worked Hours: " + workedhours);
// alert("Overtime pay: " + overtimepay +  " Rs")


// **Question#10**

// var amount = parseInt(prompt("Enter amoount tp withdraw: "));

// var fivethousands = 0 , thousands = 0 , fivehundreds = 0 , hundreds = 0 , fifties = 0 , tens = 0;

// fivethousands = Math.floor(amount/5000)
// amount = amount % 5000;

// thousands = Math.floor(amount/1000)
// amount = amount % 1000;

// fivehundreds = Math.floor(amount/500)
// amount = amount % 500;

// hundreds = Math.floor(amount/100)
// amount = amount % 100;

// fifties = Math.floor(amount/50)
// amount = amount % 50;

// tens = Math.floor(amount/10)
// amount = amount % 10;

// var result = " You will have "

// var remaining = "<br>" + "The Remaining amount that can not be withdrawn: "

// if (fivethousands > 0) result += fivethousands + " Fivethousands notes "

// if (thousands > 0)  result += thousands + " thousands notes " 

// if (fivehundreds > 0) result += fivehundreds + " fivehundreds notes "

// if (hundreds > 0) result += hundreds + " hundreds notes "
    
// if (fifties > 0) result += fifties + " fifties notes "

// if (tens > 0) result += tens + " tens notes "

// if  (amount > 0) remaining += amount 

// document.write(result)

// document.write(remaining)



// ************Chapter 43-48************

// **Question#1**

//done with same alert of Q2

// **Question#2**

// function after(){
//     Swal.fire({
//   position: "top-end",
//   icon: "success",
//   title: "Thanks for purchasing a phone from us",
//   showConfirmButton: false,
//   timer: 1500
// });
// }


//  **Question#3** 




// **Question#4** 
// done in html file



// **Question#5** 

// let count = 0;

// function increase() {
//   count++;
//   document.getElementById("counter").textContent = count;
// }

// function decrease() {
//   count--;
//   document.getElementById("counter").textContent = count;
// }





