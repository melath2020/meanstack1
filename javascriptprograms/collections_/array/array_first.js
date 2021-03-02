// array
// to store more then one objects
// We can store any type of objects
// there is no length limit

var names=["java","javascript","python","c#","dart"]
// index     0        1           2       3      4
console.log(names[1])


// iterate

for (let items of names){
    console.log(items)
}

// adding a new object to array 
names.push("perl")
console.log(names)

// removing a item from array
names.pop()
console.log(names)