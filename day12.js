//innerHTML ---adds html element
let h1_1=document.createElement("h1")
document.body.appendChild(h1_1)
h1_1.innerHTML="<h1>Hello world</h1>"  //Adds or combine html element 
h1_1.style.color="red"


let section_1=document.createElement("section")
section_1.id="parent"
document.body.appendChild(section_1)

//textContent ---- Adds text into the html element
let h1_2=document.createElement("h1")
h1_2.textContent="Hello State" //Just text
h1_2.style.color="blue"

//appendChild --- Only accepts one argument
document.getElementById("parent").appendChild(h1_2)

//append --- Accepts many arguments 

let li1=document.createElement("li")
li1.textContent="Car"
let li2=document.createElement("li")
li2.textContent="Bike"
let olp=document.querySelector("#olp")
olp.append(li1,li2,"Welcome")//both li tags got numbering , but welcome got appended in li2 itself

//prepend --- used to add child element at the start

let li3=document.createElement("li")
li3.textContent="Truck" //Element added at 1st number
olp.prepend(li3)


//remove() or removeChild() -- used to remove elements,both are same

li2.remove()
// h1_1.removeChild() //not working yet


//Dom attribute methods

//setAttribute() --- used to set attributes accepts 2 arguments 

//absolute
let img1= document.createElement("img")
img1.setAttribute("src","")


//relative
let img2= document.createElement("img")
img2.setAttribute("src","rajnikant.jpg")





