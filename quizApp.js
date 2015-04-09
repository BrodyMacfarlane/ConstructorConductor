//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters and set them appropriatly


var Person = function(name,email,password,totalScore){
	this.name = name;
	this.email = email;
	this.password = password;
	this.totalScore = totalScore;
};



//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

 var Question = function(title, answersArray, rightAnswer, difficulty){
 	this.title = title;
 	this.answersArray = answersArray;
 	this.rightAnswer = rightAnswer;
 	this.difficulty = difficulty;
 };


//Create a users Array which is going to hold all of our users.

var users = [];


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

users[0] = new Person('Tyler T.', 'ttsk8er@hotmail.com', 'musicforlifebro', 0);
users[1] = new Person('Taylor J.', 'tay.j@gmail.com', 'curveball', 0);
users[2] = new Person('Garrett V.', 'gmoney@gmoney.com', 'fishfish01', 0);


//Create a questions Array which is going to hold all of our questions

var questions = [];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

var question1 = new Question('T/F: Inheritance is achieved in JavaScript through Prototypes?',['T','F'],'F','Hard');
var question2 = new Question('T/F: JavaScript is just a scripting version of Java',['T','F'],'F','Medium');
var question3 = new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value",['T','F'],'T','Easy');


//Now push all of your instances of Question into the questions Array

questions.push(question1,question2,question3);

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

var loop = function(arr,arr2){
	for(i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
	for(j = 0; j < arr2.length; j++){
		console.log(arr2[j], arr2[j].answersArray);
	}
};

loop(users, questions);

