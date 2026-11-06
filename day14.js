                     //classList

// Why use ClassList?
//classList is used to solve problems when we try to write css in js:
// 1.repeatation of code
// 2.hard Coding
// 3.Advanced Css properties cannot be used in js


//classList Methods:-
// 1.add
// 2.remove
// 3.replace
// 4.contains
// 5.toggle



//add
let h1=document.createElement("h1")
document.body.appendChild(h1)
h1.textContent="Hello World!!"
h1.classList.add("h1_css","h1_css2")

//remove & content
let h1_ii=document.getElementById("deepavali")
console.log(h1_ii)
console.log(h1_ii.classList) // Names are not comming check again!!

//remove
h1_ii.classList.remove("style")

//content
console.log(h1_ii.classList.contains("content"))


//replace
// classList.replace("",src)



//toggle (Adds class if class is not present and removes class if
// class is present)

let btn= document.querySelector("#btn")
let text=document.querySelector("#text")

btn.addEventListener("click",()=>{
       text.classList.toggle("togglestyle")
})



// Task 1 (Combining Events and classList handling) --------------------

let addStyle=document.querySelector("#addStyle")
let pic=document.querySelector("#pic")

addStyle.addEventListener("click",()=>{
       pic.classList.add("dynamicimgcss")
})

let addPic = document.querySelector('#addPic')

addPic.addEventListener("click",()=>{
       pic.src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
})

//Remove pic
let removepic=document.querySelector("#removePic")
removepic.addEventListener("click",()=>{
       pic.classList.remove("dynamicimgcss")
})

//Replace pic
let replacepic=document.querySelector("#replacePic")

replacepic.addEventListener("click",()=>{
       pic.src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png"
})


//toggling body styling on clicking repStyle button
let repStyle=document.getElementById("repStyle")

repStyle.addEventListener("click",()=>{
       document.body.classList.toggle("body") //Changed body styling
       //Changed button content and styling
       repStyle.textContent="Replaced body styling"
       repStyle.classList.toggle("bodybtn")
})