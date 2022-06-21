//                   Question-01


// var Fname = prompt("Enter Your First Name: ");
// var Lname = prompt("Enter Your Last Name: ");

// var fullName = Fname +" "+ Lname;
// alert("Hello "+fullName);

//                   Question-02




// var Mobile = prompt("Enter Your Fav Mobile Model: ");

// var Final = Mobile.length;

// console.log("My Favorite Phone is: "+Mobile);
// console.log("Length Of String: "+Final);

//                   Question-03

// var user = "Pakistani";

// for(i=0;i<user.length;i++){
//     if (user.charAt(i)==="n"){
//         console.log("String: "+user);
//         console.log("index of 'n' is: "+i);
//     }
// }

//                   Question-04


// var user = "Hello World";
// for(i=user.length;i>=0;i--){
//     if (user.charAt(i)==="l"){
//         console.log("String: "+user);
//         console.log("Last index of 'l' is: "+i);
//         break
//     }
// }

//                   Question-05

// var user = "Pakistani";

// console.log(user.charAt(3));

//                   Question-06


// var Fname = prompt("Enter Your First Name: ");
// var Lname = prompt("Enter Your Last Name: ");

// var fullName = [];

// var result = fullName.concat(Fname,Lname).join(" ");
// alert("Hello "+result);


//                   Question-07

// var city = "Hyderabad";
// for (i=0;i<city.length;i++){
//     if(city.slice(i,i+5)==="Hyder"){
//         city = "Islam"+city.slice(i+5);
//     }
// }
// console.log(city)
// console.log(city.replace("Hyder","Islam"))

//                   Question-08

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var message1 = message.replace(/and/g,"&");
// console.log(message1);

//                   Question-09


// var value = "472";
// console.log(value);
// console.log(typeof(value));

// var num = parseInt(value);
// console.log(num);
// console.log(typeof(num));

//                   Question-10

// var user = prompt("Enter Any Word In Small Letters: ");

// var Fuser = user.toUpperCase();
// console.log(Fuser)

//                   Question-11

// var user = prompt("Enter Any Word In Small Letters: ");
// for (i=0;i<user.length;i++){
//     var Fuser = user.charAt(0).toUpperCase();
//     var result = Fuser+user.charAt(i+1);

// }
// console.log(result);

//                   Question-12

// var num = 35.36;

// var result = num.toString();
// console.log(result.split(".").join(""));

//                   Question-13

// var user = prompt("Enter Your Name: ")
// for(i=0;i<user.length;i++){
//     if (user[i]===String.fromCharCode(33)|| user[i]===String.fromCharCode(44) || user[i]===String.fromCharCode(46) || user[i]===String.fromCharCode(64) ){
//         alert("Invalid Character!")
//     }
// }


// console.log(String.fromCharCode(33));

//                   Question-14

// var fruits = ["cake","apple pie","cookie","chips","patties"];

// var val1 = prompt("Enter The Element You Want: ")
// flag = false
// for(i=0;i<fruits.length;i++){
//     if (fruits[i] === val1.toLowerCase()){
//         flag = true
//     }
// }
// if (flag===true){
//     alert("Found");
// }
// else{
//     alert("Not Found");
// }

//                   Question-15

// var pass = prompt("Enter Your Password: ");
// var small = "abcdefghijklmnopqrstuvwxyz"
// var small1 = small.split("")

// for(i=0;i<pass.length;i++){
//     if(pass.length<6){
//         alert("6 se barrra likho")
//         break
//     }
//     else{
//     if (pass[i] >= String.fromCharCode(48) && pass[i] <= String.fromCharCode(57)) {
//         if(pass[i]>=string.fromCharCode(65) && pass[i]<= String.fromCharCode(90)){
//             if(pass[i])

//     }
//     }
// }

//                   Question-16

// var uni = "University Of Karachi";
// var uni1 = uni.split("").join("\n");
// console.log(uni1);

//                   Question-17

// var user = prompt("Enter Your Name:");

// console.log(user.charAt(user.length-1));

//                   Question-18

// var str = "The quick brown fox jumps over the lazy dog.";
// count = 0
// for(i=0;i<str.length;i++){
//     if(str.slice(i,i+3).toLowerCase()==="the"){
//         count += 1
//     }
// }

// console.log("There Are "+count+" occurence of 'the'");

