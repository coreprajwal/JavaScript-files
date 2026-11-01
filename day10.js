//DOM (Document object model)



//Targetting element by html elements


//Targetting element by html ud 
let f=document.getElementById("fest")
console.log(f)

//Targetting element by html class 
let m=document.getElementsByClassName("movie")
console.log(m)

//Target element by tag name
let q= document.getElementsByTagName("h1")
console.log("Selected by TagName for h1:",q)

//Targetting html element by querrySelector
//Returns html element

//id
let hd= document.querySelector("#fest")
console.log("querySelector:",hd)

//class
let mc= document.querySelector(".movie")
console.log(mc) //only first got selected



//targetting by querySelectorAll (Returns Node list)

//class
let qac=document.querySelectorAll(".movie")
console.log(qac)
//id
let qai=document.querySelectorAll("#fest")
console.log(qai)

//----------------------------------------------------------------------------------
console.log("---------------------Styling using selectors----------------------")

//styling by targetting id
let fest=document.getElementById("fest")
fest.style.color="red"

//styling by targetting class
let movies= document.getElementsByClassName("movies")
// movies.style.color="Blue" //Throws error because currently its collection
movies[0].style.color="blue"
movies[1].style.color="blue"

// movies.foreach((ele)=> ele.style.color="red") //Will not work becasue HTML Collection is not iterable

//styling by using querySelector

let cin=document.querySelector(".movies")
console.log(cin) //somehow not showing if we pass class name in querySelector
cin.style.color="pink"

//styling by using querySelectorAll

let cinema=document.querySelectorAll(".movies")
cinema.forEach((ele)=> ele.style.color="blue")




