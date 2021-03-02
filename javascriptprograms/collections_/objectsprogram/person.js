var arr=[10,11,8,7,6,12,13]


//find squares of each num in thease array

var data=arr.map(num=>num**2)
console.log(data)

//find cube of each number
var data=arr.map(num=>num**3)

//find double of each element in the array
var dble=arr.map(num=>num+num)
console.log(dble)


//find even numbers in the array

var data=arr.filter(num=>num%2==0)
console.log(data)

//change the names to upper case

var names=["alan","abi","bine","binoy"]
var data=names.map(name=>name.toUpperCase)
console.log(data)

//to print name start with a
var data=names.filter(name=>name.charAt(0)=='a')
console.log(data)