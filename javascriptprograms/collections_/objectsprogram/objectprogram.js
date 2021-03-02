
//objects are stored in the form of key value
var students={
    rol:"100",
    name:"ajay",
    course:"bca",
    total:150

 }
 //key :value
 //duplicate keys are not allowed
 //duplicate values are allowed
 //accessing values
 //if we want to access values we have to use corresponding key
 console.log(students["rol"])
 console.log(students.rol)

 //print ajay
 console.log(students.name)

 for(let student in students){
     console.log(student+","+students[student])

 }

 //checking for a specific key
 console.log("gender" in students)

 //adding a new key value pair
 students["gender"]="male"
 console.log(students)

 //update

 students["total"]+=25
 console.log(students)