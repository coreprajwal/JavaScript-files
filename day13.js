// Event : it is an action perfromed by user on the browser to perform so specific task.


//Traditional way of handling event (function call directly in html)

//onclick
//ondblclick
//onmouseover
//onmouseout

//ondrag
//onplay

function onsubclick(){
       alert("Form submitted successfully!")
       // document.body.appendChild(document.createElement("h1").textContent("This is js generated text"))
}

function onclickhere(){
       alert("Through Js only")
}





//Modern way of handling event (Preffered) ------------------------------

//By creating addEventListener 
// addEventListener is an event handler which accepts event function
// and a callback function

//Important events :-
//click
//dblclick
//mouseover
//mouseout
//keypress
//keyup


//click
let clickhere=document.getElementById("clickhere")

clickhere.addEventListener("click",()=>{alert("Alert Through JavaScript")})
// clickhere.addEventListener("click",onclickhere)


//dblclick
let dblclicktag= document.querySelector("#dblclickid")
console.log(dblclicktag)
dblclicktag.addEventListener("dblclick",()=>{alert("You clicked Twice!")})


//keypress
//keyup

let inputtag= document.querySelector("#keystest")

console.log(inputtag)
inputtag.addEventListener("keypress",()=>{
       inputtag.style.backgroundColor="Blue"
})

inputtag.addEventListener("keyup",()=>{
       inputtag.style.backgroundColor="Red"
})


//mouseover
//mouseout



// Task :------------------------------------------------

let imgtag=document.createElement("img")


let addbtn=document.getElementById("addbtn")
addbtn.addEventListener("click",()=>{
imgtag.src="https://wallpaperaccess.com/full/7927079.jpg"
imgtag.width="300"
document.body.appendChild(imgtag)

})

let replacebtn=document.querySelector("#replacebtn")
replacebtn.addEventListener("click",()=>{
       imgtag.src="https://wallpapers.com/images/hd/blue-sasuke-zhrwc3j7uq6403gp.jpg"

})


let removebtn=document.querySelector("#removebtn")

removebtn.addEventListener("click",()=>{
       imgtag.remove()
})
















