//Creating Html element
let h1=document.createElement("h1")

//Adding properties to html element
h1.innerHTML="Rajnikant"
h1.style.color="red"
h1.style.backgroundColor="black"

//Attaching html element with Dom tree
document.body.appendChild(h1)


let img= document.createElement("img")
// img.setAttribute("src","rajnikant.jpg")
img.height="200"
img.width="200"
img.src="rajnikant.jpg"

document.body.appendChild(img)
console.log("Hello world")