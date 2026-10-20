// Anonymous function (first class (Anonymouse assigned to variable) / first citizen function (react))

// let task = function(){
//        console.log("Hii i'm function")
// }

// task()

{
       //local scope (var variable can be accessed outside local scope)
}


//Block scope (Can access var variable outside block scope)
// if(true){
//        var place="pune"
// }

// console.log(place)


//function scope (var variable will not be acessed outside function scope)
// function task(){
//        let place2="nashik"
//        console.log(place2)

//        var place3="Akola"
//        console.log(place3)
// }
// task()
// console.log(place3)


//Nested function

//Lexical scope chain or closure
// Accessing property or variable inside child function

function parent(){
       let place="pune"
       console.log(place)
       var outside="outside variable!!"

       function child(){
              console.log(outside)
              console.log(place);

              var age=89;
       }
       child()
       // console.log(age)
}

parent()



//Arrow function
// Arrow function is known for its shorter syntax
// It is introduced in ES6 concept
// Most used JS function in front end

//Syntax
// () => { }


//Anonymous Arrow funtion / First class Arrow function both are possible
let task = () => {
       console.log("Arrow function")
}
task()


//Named function
// Anonymouse function
// first-class-function
// arrow function
// nested function --closure


// scopes:
// global scope 
// local scope
// block scope
// function
// nested