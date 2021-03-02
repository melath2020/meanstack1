var arr=[1,2,33,35,34]


//map()
//filter
//reduce
//sort()

var srt=arr.sort((no1,no2)=>no1-no2)//sort accenting decenting (no2-no1)

//var squ=arr.map(num=>num**2)//squere
//var even=arr.filter(num=>num%2==0)//even number

//reduce
var maxs=arr.reduce((no1,no2)=>no1>no2?no1:no2)
console.log(maxs)

//total
var sm=arr.reduce((no1,no2)=>no1+no2)
console.log(sm)