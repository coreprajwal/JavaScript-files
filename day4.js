// Named function declarations
task(11,11)
function task(a,b){
       console.log("Hello world")
       console.log(a+b)
}

task(10,2)
task(5,5)

//fuctions with or without expected argument or parameters

function task2(v1,v2){
       console.log(v1+v2)
}

task2(11,11)
task2(11)
task2(11,"hello")
task2(11,null)
task2(11,true)
task2(11,false)


// NaN (not an number)- special type of output apeears when the 
// parameter supposed to revei ve or accept the integer value but it wont


//Named function:

function add(msg,name,age){
       // with concatination
       console.log(msg+"My name is "+name+" and my age is"+age);
       // with interpolation or template literal
       console.log(tild ${msg} My name is ${name} and my age is ${age}tild)
}

