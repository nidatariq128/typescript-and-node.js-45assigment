"use strict";
//// --------------Qno:01----------?:
console.log("Hello World!");
////-------- Qno: 02-----------?
//  let personName="nida tariq";
// console.log("hello",personName,"would you like to learn typescript ")
////--------Qno:03----------------?
// let personsName = "nida tariq";
// console.log(personsName.toLowerCase());
// console.log(personsName.toUpperCase());
// console.log(personsName.charAt(0).toUpperCase()+personsName.slice(1).toLowerCase());
// console.log("nida tariq. NIDA TARIQ. Nida Tariq");
////-----------Qno:04----------?
// console.log("Albrey Hypburn one said",'"Word impossible itself says I AM possible"');
////----------Qno:05---------?
// let famousPerson="Audrey Hypburn";
// let messages ="once said,'Word impossible itself says I AM possible'";
// console.log(famousPerson,messages);
////------------Qno:06--------?
// let whiteSpace="\n\t Nida Tariq\n\t";//\n used for new line \t is used for whitespace,
// console.log(whiteSpace);
// let withoutWhiteSpace = whiteSpace.trim();
// console.log(withoutWhiteSpace);
////-------Qno:07--- &---Qno:08----?
// console.log(4+4);
// console.log(10-2);
// console.log(2*4);
// console.log(16/2);
////---------Qno:9-------------?
// let favourteNumber =6;
// console.log('My favourte number is',favourteNumber);
////------------Qno:10---------?
//  let whitespace="\n\t Nida Tariq\n\t";//\n used for new line \t is used for whitespace,
//  console.log(whitespace);
//  let withoutwhiteSpace=whitespace.trim();
//  console.log(withoutwhiteSpace);
////--------Qno:11---------?
// let friendsName =["Alizba","Mavra","Tooba","Faryal","Rabi"];
// console.log(friendsName[0]);
// console.log(friendsName[1]);
// console.log(friendsName[2]);
// console.log(friendsName[3]);
// console.log(friendsName[4]);
////------------Qno :12----------?
// // let friendsName =["Alizba","Mavra","Tooba","Faryal","Rabi"];
// //  let message="do you learn typescript";
// //  console.log("Heloo",friendsName[0],message);
// //  console.log("Hello",friendsName[1],message);
// //   console.log("Hello",friendsName[2],message);
// //   console.log("Hello",friendsName[3],message);
// //   console.log("Hello",friendsName[4],message);
////---------Qno:13------------?
// let transpotation: string []= ["Honda Motorcyle","Audi","Honda city"];
// transpotation.map((Items) => console.log(`I wouldlike to own a ${Items}`));
////----------Qno:--------14?
// let guestArr:string [] =["Alizba","Mavra","Tooba",];
// guestArr.map((items) => (console.log(`Dear ${items}, you are invited to the dinner`)));
////----------Qno:15----------?
// let guestArr:string [] =["Alizba","Mavra","Tooba",];
// let canNotAttend : string ="Mavra";
// console.log(canNotAttend,"can not attend the dinner");
// let newGuest : string = "Rabi";
// guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr);
// guestArr.map((items) =>
//   console.log(`Dear ${items},You are invited tothe dinner,`)
// ) 
////----------- Qno:16-----------?
// let guestArrs:string [] =["Alizba","Mavra","Tooba","saba",];
// let canNotAttend: string ="saba";
// let newGuest: string = "samra";
// guestArr[guestArrs.indexOf(canNotAttend)] = newGuest;
// console.log(guestArrs);
// guestArrs.map((items) =>
//   console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`)
// );
//// part 2:
// let guestbig : string = "Mahanoor";
// guestArrs.unshift(guestbig);
// console.log(guestbig);
////part3 
// let middleGuest : string ="Aqsa";
// let middleIndex = guestArrs.length/3;
// guestArrs.splice(middleIndex,0,middleGuest);
// console.log(guestArrs);
////part 4 
// guestArrs.push("Azeem");
// console.log(guestArrs);
//// part 5
// guestArrs.map((items) =>
//   console.log(`Dear ${items}, you are invited to the more people category on dinner`));
////------------ Qno:17-----------?
// // initial list of guests://
//   let guests:string [] = ["Naeem","Fahim","Azeem","Zain","Ali"];
////  information that only two people can be invited!
// console.log("Due to limited space ,only two people can be invited for dinner");
//// part 2:removing guestS until only two names remain!
// while  (guests.length > 2){
//   const removedGuests = guests.pop();
//   console.log(`sorry,${removedGuests},you're no longer invited to dinner`);
// }
//// PART 3:printing invitations to the remaining two guests!
// guests.forEach((guests) =>{
//   console.log(`Dear ${guests},you 're still invited to dinner`);
// })
//// part4:removing the two name from the list:
// guests.pop();
// console.log("final guests list:",guests);
////Q:no------------18------?
//// stor the location is an array!
// let placesToVisit: string[] = ["Pakistan","Chaina","Japan","America","tokyo"];
//// print the arre in its original order?
// console.log(placesToVisit);
//// print the array in alphabetical order?
// console.log([...placesToVisit].sort());
////show that  the arrayis still in its orignal order?
// console.log(placesToVisit) ;
//// revers alphabetical order?
// console.log([...placesToVisit].sort().reverse());
//// revers the order of the list?
// placesToVisit.reverse();
// console.log(placesToVisit);
//// stor the arry in alphabetical order?
// placesToVisit.sort();
// console.log(placesToVisit)
//// sort the arryay in reverce alphabtical order?
// placesToVisit.sort((a, b)=> b.localeCompare(a));
// console.log(placesToVisit)
////------------Qno19----------?
//  let invitations : string[] = ["naeem","faheem"];
//  let count_invitations : number = invitations.length
// console.log(`${count_invitations} people will come to the dinner`);
////--------- Qno#20--------------?
//// think of something you could store in a array.
////  for examplle ,you could make a list of mountaion,river,countries,languages,of anythng else you,d like .
////  write a program that creates a list containing these items. 
//let country : string[] = ["pakistan","india","america","chaina","japan"];
//console.log("List Of country:");
//console.log(country);
////--------Qno#21------?
//// think of something you could store in typescript object. 
////write a program that creates object containing these items?
// let persone: {name : string , Fname : string , age : number} = {name: "nida" , Fname: "AbdulRaheem" , age:22};
// console.group(persone);
////---------QNO#22------?
////international error: if you haven't received an array index error in one of your
////programs yet,try to make ine happen change an index in one of your programs
////produce an index error. make sure you connect the error befor  closing the programs.
// const days : string[] = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// // console.log(days{7})//error
// console.log(days[6])//right
////--------QNO#23--------?
////Conditional tests:write a series  of conditional tests.
////print a ststement descnbing each test and your prediction for the result.
////your code should look something like this : let car = "subaru"
////test:01
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru'); //true
// console.log("Is car == 'honda'? I predict false.");
// console.log(car == 'honda'); //false
////test:02
// let = 20;
// console.log("Is number > 10? I predict True.");
// console.log(number > 10);
////test:03
// let myBirthdayMonth = "February";
// console.log("Is My Birthday Month ! == `February`? predict true");
// console.log(myBirthdayMonth !== "Februar");
////test:04
// let myFavFood = "pizza";
// console.log("Is myFavFood == `pizza`?");
// console.log(myFavFood == "pizza");
////test:05
// let studentGrade = "A+";
// console.log("Is studentGrade == `A+`?");
// console.log(studentGrade == "A+");
////test:06
// let myAge = 22;
// console.log("Is myAge! == 22?");
// console.log(myAge! == 22);
////test:07
// let color = "Red";
// console.log("Is color == `Red`?");
// console.log(color == "Red");
////test:08
// let Car = "honda";
// console.log("Is Car == `honda`?");
// console.log(Car == "honda");
////test:09
// let number1 = 20;
// console.log("Is number1 < 16?");
// console.log(number1 < 16);
////test:10
// let myName = "nida";
// console.log("Is myName == `rabi`?");
// console.log(myName == "rabi");
////----------QNO#24-------?
//// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//// If you want to try more comparisons,
//// write more tests. Have at least one True and one False result for each of the following:
// let car ='sabaru';
// let age = 22;
// let number = [1, 2, 3, 4];
// // test 1: equality (true)"Tests for equality and inequality with strings"?
// console.log("is car =='sabaru? I predected true.");
// console.log(car == 'sabaru');
// // test 2: strict equality (true)
// console.log("is car === 'sabaru? I predected true.");
// console.log(car === 'sabaru');
//// test 3:  inequality (false)
// console.log("is car !='sabaru? I predected false.");
// console.log(car != 'sabaru');
// // test 4:  inequality (false)
// console.log("is car !=='sabaru? I predected false.");
// console.log(car !== 'sabaru');
// // test 5: lowercase conversion(true)
// console.log("is car.tolowerCase() =='sabaru? I predict true.")
// console.log(car.toLowerCase() == 'subaru');
// // test 6: lowercase conversion(true)
// console.log("is car === car.toLowerCase() I predict true.");
// console.log(car === car.toLowerCase());
// // test 7: numerical tests?
// console.log("is age == 22? I predict true.");
// console.log(age == 22);
// // test 8: inequality(false)
// console.log("is age != 22?I predict false.");
// console.log(age != 22);
// // test 9: Greater (false)
// console.log("is age > 25? I predict false.");
// console.log(age > 25);
// // test 10: less than or equal(true)
// console.log("is age <= 25? I predict true.");
// console.log(age <= 25);
////  test 11: And (true) logical operators
// console.log("is age > 20 && < 30? I predict true.");
// console.log(age > 20 && age < 30);
//// test 12: or (false)
// console.log("is age > 30 || age < 20? I predict false");
// console.log(age > 30 || age < 20);
////test 13: array testes---:
// console.log("3 in number? I predict true");
// console.log(3 in number);
// // test 14:
// console.log("8 in number? I predict false");
// console.log(8 in number);
////------Qno:25--------?
// Alien Colors #1: Imagine an alien was just shot down in a game. 
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
////01: Write an if statement to test whether the alien’s color is green.
////  If it is, print a message that the player just earned 5 points.
let alian_color = "green";
if (alian_color = "green") {
    console.log('You earn  5 points');
}
;
////02: Write one version of this program that passes the if test and another that fails. 
//// (The version that fails will have no output.)
let alien_color = "red";
if (alian_color == "yellow") {
    console.log("You earn  5 points");
}
;
//----------------Qno 26:----------------
//// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let aliens_color = "green";
if (aliens_color == "green") {
    console.log("You earn  5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points. ");
}
// • Write one version of this program that runs the if block and another that runs the else block.
// let alien_color : string = "green";
// if(alien_color = "yellow"){
// console.log("player just  earned  5 points for shooting the alien.")
// }else{
//   console.log("player just earned 10 points.");
// }
//-----------------Qno:27---------?
//// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// //If the alien is green, print a message that the player earned 5 points.
// //version 1:
// let alian_color: string = "green";
// if(alian_color == "green"){
//   console.log("the player earned 5 point.");
// } 
// else if(alian_color == "yellow"){
//   console.log("the player earned 10 point.");
// }
// else if(alian_color == "red"){
//   console.log("the player earned 15 point.");
// }
// else{
//   console.log("please choose correct one.");
// }
// // version 2:
// let alian_color: string = "yellow";
// if(alian_color == "green"){
//   console.log("the player earned 5 point.");
// } 
// else if(alian_color == "yellow"){
//   console.log("the player earned 10 point.");
// }
// else if(alian_color == "red"){
//   console.log("the player earned 15 point.");
// }
// else{
//   console.log("please choose correct one.");
// }
// // version 3:
// let alian_color: string = "red";
// if(alian_color == "green"){
//   console.log("the player earned 5 point.");
// } 
// else if(alian_color == "yellow"){
//   console.log("the player earned 10 point.");
// }
// else if(alian_color == "red"){
//   console.log("the player earned 15 point.");
// }
// else{
//   console.log("please choose correct one.");
// }
//// version 4:
// let alian_color: string = "pink";
// if(alian_color == "green"){
//   console.log("the player earned 5 point.");
// } 
// else if(alian_color == "yellow"){
//   console.log("the player earned 10 point.");
// }
// else if(alian_color == "red"){
//   console.log("the player earned 15 point.");
// }
// else{
//   console.log("please choose correct one.");
// }
////------------------Qno28:------------
//// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// let age : number = 66;// change the age number and see the result;
// if(age < 2){
// //   console.log("the person is baby!");
// // }
// // else if(age >= 2 && age < 4 ){
// // console.log("the person is toddler!");
// // }
// // else if(age >= 4 && age < 13 ){
// //   console.log("the person is kid!");
// // }
// // else if(age >= 13 && age < 20){
// //   console.log("the person is teenager!");
// // }
// // else if(age >= 20 && age < 65 ){
// //   console.log("the person is adult!");
// // }
// // else if(age = 65 || age > 65){
// //   console.log("the person is elder!");
// // }
// // ////-------------Qno 29?-----------------
// // ////favorite Fruit: Make a array of your favorite fruits,
// // //// and then write a series of independent if statements that check for certain fruits in your array.
// // let favorite_fruits = ["Apple","Mango","orange","gava","graps"];
// // if(favorite_fruits.includes("Apple")){
// //   console.log("I really like Apple");
// // }
// // if(favorite_fruits.includes("Mango")){
// //   console.log("I really like Mango");
// // }
// // if(favorite_fruits.includes("orange")){
// //   console.log("I really like orange");
// // }
// // if(favorite_fruits.includes("gava")){
// //   console.log("You really like banana");
// // }
// // if(favorite_fruits.includes("graps")){
// //   console.log("You really like banana");
// // }
// ////------------Qno30:------------
// ////Hello Admin: Make a array of five or more usernames, including the name 'admin'.
// //// Imagine you are writing code that will print a greeting to each user after they log in to a website.
// //// Loop through the array, and print a greeting to each user:
// // let userNames : string[] = ["admin","dora","vasa","boneth","esala"];
// // for(let user of userNames){
// //   if(user === "admin"){
// //     console.log("Hello admin, would you like to see a status report?")
// // }
// // else {
// // console.log(`Hello ${user},thank you for loggin in again`)
// // }
// // }
// ////--------------Qno:31-------------
// // //No Users: Add an if test to Exercise 28 to make sure the list of users is not empty
// ////• If the list is empty, print the message We need to find some users!
// let userNames : string[] = ["admin","dora","vasa","boneth","esala"];
// // userNames = []
// if(userNames.length === 0){
//   console.log("we need to fine some users!")
// }
// else{
//   userNames = [];
//   console.log("all user have be remove the array."+ userNames.length);
// }
// ////------------------Qno:32------------
// //// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// let current_Users : string [] = ["Nida","Fatima","Rabia","Alizba","Hunza"];
// let new_Users : string [] = ["Hunza","Mavra","Nida","Sabahat","Samra"];
// let current_Users_lower :string[] = current_Users.map(user => user.toLowerCase())
// for (let new_User of new_Users){
//   if(current_Users_lower.includes(new_User.toLowerCase()))
//     console.log(`The username ${new_User}, is not available . please write a diffrent usersname`)
//   else{
//     console.log(`The username ${new_User}, is avalible `);
//   }
// };
// ////---------------------Qno: 33---------------
// // Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// let numbers : number [] = [1,2,3,4,5,6,7,8,9,];
// for(let number of numbers){
//   let ordinaryEnding;
//   if(number == 1){
//     ordinaryEnding = 'st';
//   }
//   else if( number == 2){
//     ordinaryEnding = 'nd';
//   }
//   else if(number == 3){
//     ordinaryEnding ='rd';
//   }
//   else{
//     ordinaryEnding = 'th'
//   }
//   console.log(`${number}${ordinaryEnding}`);
// }
// ////------------Qno: 34------------
// ////Pizzas: Think of at least three kinds of your favorite pizza.
// //// Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// let favorite_Pizzas :string [] = ["cheese" , "bbq" , "pepperoni" , "fagita"];
// for (let i = 0; i < favorite_Pizzas.length; i++) {
// console.log('I like '  + favorite_Pizzas[i] + 'pizza');
// }
// console.log(`I really like pizza!`);
// ////--------------Qno : 35-----------
// // Animals: Think of at least three different animals that have a common characteristic. 
// // Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// //  • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// // • Add a line at the end of your program stating what these animals have in common.
// //  You could print a sentence such as Any of these animals would make a great pet!
// let Animals : string [] = ["dog","lion","horse"];
// for(let Animal of Animals){
//   console.log(`A ${Animal} would make a great pet!`)
// }
// console.log(`Any of these animal would make a great pet!`)
////-----------------Qno:36--------
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function make_shirt(size: string , messege : string ){
//   console.log(`You order a ${size} shirt that says ${messege}`)
// }
// //  call the function:
// make_shirt("small", "do not stop untill you are proud!");
// make_shirt("medium", "do not stop untill you are proud!");
// make_shirt("large", "do not stop untill you are proud!");
// ////-----------------Qno:37?-------------
// // Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// // Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// // function make_shirt(size: string = "large" , message: string ="i love typescript"): void {
// // console.log(`You have order a ${size},shirt that says ${message}`)
// // }
// // make_shirt();
// // make_shirt("medium")
// // // // Call the function by default:
// // make_shirt("small", "I need a big shirt to war");
// ////-------------------Qno:38?-----------
// // Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// // The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
// // Call your function for three different cities, at least one of which is not in the default country.
// function describe_city(city : string , country : string = " pakistan"):void{
//   console.log(`${city} is in ${country}`)
// }
// //default city
// describe_city("karachi" , "pakistan");
// describe_city("france", "europe");
// describe_city("karachi");
// ////--------------Qno:39-------
// ////City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// // "Lahore, Pakistan"
// // Call your function with at least three city-country pairs, and print the value that’s returned.
// // function city_country(city : string , country : string){
// //   return(`${city} , ${country}`)
// // }
// // console.log(city_country("lahor" , "Pakistan"));
// // console.log(city_country("nagoya" , "japan"));
// // console.log(city_country("paris" , "france"));
// ////------------Qno:40--------------
// ////Album: Write a function called make_album() that builds a Object describing a music album.
// //  The function should take in an artist name and an album title, 
// // and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums.
// //  Print each return value to show that Objects are storing the album information correctly.
// //  Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks,
// //  add that value to the album’s Object.
// //  Make at least one new function call that includes the number of tracks on an album.
// function make_album(artist : string , title : string ){
//   const album = {
//     artist : artist.charAt(0).toUpperCase()+ artist.slice(1),
//     title : title.charAt(0).toUpperCase()+ title.slice(1),
//   };
// return album;
// }
// let album1= make_album("arjet","moon");
// console.log(album1)
// let album2 = make_album("nida","mahi");
// console.log(album2)
// let album3 = make_album("zafar","dil");
// console.log(album3)
////-----------------Qno:41-------------?
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.
//Make a arry called show magicians?
// function show_magicians(magicians) {
//   for(var i = 0 ; i < magicians.length; i++){
//     console.log(magicians[i]);
//   }
// }
// //make funcation called make great?
// function make_great(magicians){
//   for(var i = 0 ; i < magicians.length; i++){
//     // add the great to each magician name?
//     magicians[i] = magicians[i] +  " the great";
//   }
// }
// var magicians2 = ["Doug Henning","Dynamo","Chris Angle"];
// make_great(magicians2);
// show_magicians(magicians2);
////--------------QNO:42------------?
////Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// //  Call show_magicians() to see that the list has actually been modified.
// function show_magicians(magicians) {
//   for(var i = 0 ; i < magicians.length; i ++){
//     console.log(magicians[i]);
//   }
// }
// // make function call make great?
// function make_great (magicians){
// for (var i = 0 ; i < magicians.length; i ++){
//   // add the great to each magicians mane?
//   magicians[i] =  magicians[i] +  " The great"
//   }
// }
//  var magician2 : string[] = ["Doug Henning" , "Dynamo" , "Chris Angle"];
//  make_great(magician2);
//  show_magicians(magician2);
//  ////--------------Qno:43-----------------?
//  ////Unchanged Magicians: Start with your work from Exercise 40.
//   // Call the function make_great() with a copy of the array of magicians’ names.
//   //  Because the original array will be unchanged, return the new array and store it in a separate array.
// //  Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name
// function make_great2(magicians: string[]): string{
//   var greatMagicians: string[]=[];
//   for (var i = 0 ; i <magicians.length; i++) {
//     greatMagicians.push(magicians[i] + " the great")
//   }
//   return greatMagicians;
// }
// var magician3: string[] = ["Doug Henning" , "Dynamo" ];
// var greatMagicians2 : string[] = make_great2(magician3);
// show_magicians(magician3);
// show_magicians(greatMagicians2);
////-------------Qno:44------------?
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// function makesandwich(...items:string[]):void{
//   console.log("sandwich  order:")
//   for (var i = 0 ; i < items.length; i++){
//     console.log(` - ${items[i]}`)
//   }
// }
// console.log("enjoye your sandwich");
// makesandwich("tomato","capsicum",'chiken');
// makesandwich('egg','cabbage');
// makesandwich('chiken','mayo garlic');
////---------------Qno:45--------?
//Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// type car  = {
//   manufacture: string,
//   module: string,
//   optional : string,
// }
// function createCar(manufacture : string, model : string, optional : Record<string, any>):car{
// return{
//   manufacture,
//   model,
//   ...optional
//     }
// }
// const myCar = createCar("honda", "civic", { color: 'black', year: "2022" });
// console.log(myCar);
