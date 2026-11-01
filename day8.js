// Array iteration methods (All higher order funcitons) ------------------------

// Most used:

// filter:- (uses arrow function to filter, 
// filter provides each elements and assume true or false value for it, 
// if its true, it prints that element to result array or else ignores it.)
// map:- 


// forEach 
// some 
// every 
// reduce 
// reduceright 
// map


// higher order function: A function which accepts another funciton as 
// an argument is called higher order function

// Callback fuction: The function which is given as an argument to a function, then
// that funciton is known as callback funciton.

//----------------------------------------------------

//
// let nums=[10,23,30,43,50]

// let newarr=nums.filter(
//        (n)=>{
//               return n%2==0
//        }
// )

// nums.filter((n)=> n%2) //--> also works

// console.log(newarr)


// Perform 7 types of operations on this array

// let n=[1,2,3,"hello","world",8]

// let n1=n.filter((n)=> n%2==0)
// console.log(n1)

// let n4=n.filter((n)=> n%2==1)
// console.log(n4) 

// let n2=n.filter((n)=> typeof(n)==typeof("str"))
// console.log(n2)

// let n3=n.filter((n)=> typeof(n)==typeof(1))
// console.log(n3)

// let n5=n.filter((n)=> n>2)
// console.log(n5)

// let n6=n.filter((n)=> n<2)
// console.log(n6)

// let n7=n.filter((n)=>n=="world")
// console.log(n7)






//Map() :- it is array iteraion method which is used
//  to pass condition on each and every array 
// element and gives result to every array element .



let names= ["vaishnavi","dhanashri","heer","kranti","tejaswi","vaishnavi"]

console.log("-------------filter using named function------------")
// Filter using named function
function printI(ele){
       // console.log(ele)
       return ele.endsWith("i")
}

let iNames=names.filter(printI)
console.log(iNames)

console.log("-------------endsWith method------------")
// Filter using arrow function (endsWith method)
let iNames2=names.filter((ele)=> ele.endsWith("i"))
console.log(iNames2)

console.log("-------------includes method------------")
// checking is element contains v (includes method)
let iNames3=names.filter((ele)=>ele.includes("v"))
console.log(iNames3)

console.log("-------------startsWith method------------")
//startsWith method
let iNames4=names.filter((ele)=>ele.startsWith("d"))
console.log(iNames4)


console.log("-------------map method------------")
// Map example:

let nums=[10,20,45,18,83,"tree"]

let mName=nums.map((ele)=>ele+10)
console.log(mName)

let mName2=nums.map((ele)=>ele%2==0) // tree string returned false
console.log(mName2)

console.log("-------------forEach method------------")
//forEach array method:---------- (No inplace operation on array)
// (Nothing is returned)

let mName3= nums.forEach((ele,idx,arr)=>{
       console.log(ele,idx,arr) // element, index, array
       // return ele*20 //even after return it is of no use.
})

console.log(mName3)


//reduce ------------ 
console.log("-------------reduce method------------")
console.log(nums.reduce((a,b)=> a+b)) // numbers got add, tree got concat

console.log("-------------reduceRight method------------")
// reduceRight-----------
console.log(nums.reduceRight((a,b)=> a+b)) // numbers got add, tree got concat
// all elements got concatinated becaue of string tree.

// Some method----------gives true if any of the element satisfies condition
console.log("-------------Some method------------")

let some_test=[10,23,40,70,100]

let some_res=some_test.some((ele)=> ele>20)
console.log(some_res)

//Every---------------gives true only if all element satisfies the condtion
console.log("-------------Every method------------")
let every_test=[10,20,30,40]

let every_res=every_test.every((ele)=> ele>20) //true for ele>5 & false for ele>20
console.log(every_res)



