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

//Modern way of handling event ------------------------------------

//By creating addEventListener 

let clickhere=document.getElementById("clickhere")

clickhere.addEventListener("click",()=>{alert("Alert Through JavaScript")})
// clickhere.addEventListener("click",onclickhere)