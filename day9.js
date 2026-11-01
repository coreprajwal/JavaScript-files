// Object creation
// By constructor function
//by literal
//


// let cars={}

//string, arr, object storing in object

//Accesing object property key and value . notaion access()


// symbol() data type primitve datatype which stroes exact same values uniquely

// == and ===(extra present in js)


// accesing object property with . notation

// updating object property

// deleting object property with delete keyword


// adding new key value pair data (property)




// Object creation by literal
let std= {
       Name:"Prajwal",
       age:21
}
console.log(std)

let emp={
       Name:"Suyash",
       age:25
}
console.log(emp)

//--------------------------------------------------------------
console.log("-------------------------------------------------")
// Methods of object

// keys:- keys methtod return the keys of respective object
console.log(Object.keys(std))

//values():- This mehtod returns the values of respective object
console.log(Object.values(emp))

//entries() :- This method returns the both key value data of respective object

console.log(Object.entries(emp))

//-------------------------------------------------------------
console.log("-------------------------------------------------")
//seal():- it seals the object, which doesn't allow add
// and delete on object but allows only updation

//isSealed() :- Used to check if object is sealed or not

Object.seal(emp) //sealed
console.log(Object.isSealed(emp))

console.log("Original after seal:",emp)

emp.marks="80"

console.log("sealed object after addition of marks property:",emp)

delete emp.Name
console.log("Sealed object after deleting Name property:",emp)

emp.age=55
console.log("Sealed object after updating age property:",emp)


//--------------------------------------------------------------
console.log("-------------------------------------------------")
//freeze():- it freezes the object, which doesn't allow 
// add, delete or update in the object

//isFrozen():- used to check is object is freeze or not

Object.freeze(std) //freezed
console.log(Object.isFrozen(std)) //checking frozen

console.log("Original after freeze:",std)

std.marks="80"

console.log("Frozen object after addition of marks property:",std)

delete std.Name
console.log("Frozen object after deleting Name property:",std)

std.age=55
console.log("Frozen object after updating age property:",std)
//-----------------------------------------------------------
console.log("-------------------------------------------------")

let emp2={
       Name:"Anuradha",
       salary:2000,
       address:{
              city:"nippani",
              state:"karnataka"
       }
}

console.log(emp2)

// in :- method that checks if a value is present in object or not.
console.log("salary" in emp2)

//Assign :- this method is used to add multiple properties inside
// object at once (its similar to update() of dict in python)

Object.assign(emp2,{
       company:"google",
       age:12,
       id:1234
})

console.log("After assign:",emp2)

console.log("-----------------Array of Object-----------------------")
// Array of Object

let emps=[
       {
              Name:"chandana",
              place:"Amsterdam",
              gender:"female"
       },{
              Name:"Gayatri",
              place:"Examba",
              gender:"female"
       },{
              Name:"Anuj",
              place:"Mysore",
              gender:"male"
       }
]

console.log(emps)

console.log("first element:",emps[0])

let maleEmps= emps.filter((ele)=>{
       return ele.gender=="male"
})
console.log("Acessing only male from emps:",maleEmps)


//Task: Create 10 array of object (employees) which includes 
// Name, age, salary ,department, hobbies,gender,isMarried, place, eid, company 

//1. Extract the employees w9ith same age
//2. Extract the employees whos department is same
//3. Increase the salary by 15% of employees whos having more than 50,000
//4. Extract the married employees
//5. Extract all male employees and give them 25% of salary hike.
//6. Extract all female employees and deduict their by 25% and then increase by 50%.
//7. Add the experience to all employees based on their salary.
//8. Delete all married female employees.
//9. Sort all employees based on their experience.
//10. Sort employees in reverse order based on their ID.




