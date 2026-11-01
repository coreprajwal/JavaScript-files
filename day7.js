// Methods of Array--------------

// string methods--------------------------------
//startsWith :- checks if string startsWith given string or not
//endsWith:- checks if string endsWith given string or not
//includes:- checks if string includes given string or not
// ----------------------------------------------


let cars=["BMW","Audi","Porche","Toyota"]
//unshift (Inplace operation, adds element at start of arr)-------------------------------
cars.unshift("Mini cooper")
console.log(cars)

//shift (Inplace remove of first element of arr)-------------------
cars.shift()
console.log(cars)

//push (inplace adds element at end)---------------
cars.push("Harley")
console.log(cars)

//pop (inplace removes element from end of array)----------------
cars.pop()
console.log(cars)


// (Imp) Difference between Slice and Splice

//           Slice              |       Splice
// used to extract some part    | used to add, remove and replace
// of Array                     | arr elements
                     //         |
// does Not modify the          | it modifies the original array
// original array               | 

// syntax:                      |Syntax: 
// (starting Idx , end+1)       | (start idx, count items, items to be replaced)

//Slice -----------------------------------------

let persons= ["Prajwal","Suyash","Abhishek","Nilesh","Pratham","Sonshree","Gitashree","Komal","Gayatri"]

console.log(persons)

let boys= persons.slice(0,5)
console.log(boys)

let girls=persons.slice(5)
console.log(girls)

//Splice ----------------------------------------

let places= ["Himachal","Kashmir","Leh","Ladakh","Sikkim","Guwahati","Asaam"]
console.log(places)

//Deleting array elements
places.splice(5,1)
console.log(places)

//Adding array elements
places.splice(0,0,"Panchgani")
console.log(places)

//Replacing array elements
places.splice(1,1,"Sonmarg","Gulmarg","Dal lake")
console.log(places)


let anime=["Naruto","Onepiece"]
let nums=[7,8,9,18,19,45,11,16]
console.log(nums)

nums.splice(3,0,anime[0],anime[1])
console.log(nums)


//Nested array accessing

let trainers= ["Rohit","Anurag","Vijay",["SQL","Communication"]]
console.log(trainers[3][0])


// indexOf -- gives index
let food=["biryani","dose","idly","pavbhaji","misal","Idly"]
console.log(food.indexOf("idly")) // o/p --> 2 (idx)
console.log(food.indexOf("uttapa")) // o/p --> -1 (default idx)

//includes --- checks membership or "in" operation
console.log(food.includes("dose")) // O/P --> true (if exist), false (not exist)

// lastIndexOf
console.log(food.lastIndexOf("idly")) // o/p --> 2 (index from last)

// sort -- inplace operation (modify original array) 
console.log(food.sort())

// sorting with number (sort with using only first digit of each numbers) (Not possible unless used arrow funtion)
let arr= [1,5,8,2,3,99,67]

console.log(arr.sort()) //(sorting using first digit of each number)
// console.log(arr.sort((a,b)=>{a-b})) //sorting of number


// reverse (inplace reverse array operation)
food.reverse()
console.log(food)

// concat (No original modification in string, joining 2 or more strings)-------------

let bikes = ["splender","luna"]
let bikes2= ["GT650","MT15"]
let bikes3 = ["Harley","Kawasaki"]

console.log(bikes.concat(bikes2,bikes3))

//join (No original modification into string, merges elements of arr witb a separator, default is ",")

console.log(bikes.join("-"))
