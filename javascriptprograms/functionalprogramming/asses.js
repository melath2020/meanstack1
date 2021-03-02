var employees=[
    {id:100,name:"ajay",salary:25000,year_join:1980,year_resign:1990},
    {id:101,name:"vijay",salary:22000,year_join:1982,year_resign:1989},
    {id:102,name:"tom",salary:30000,year_join:1980,year_resign:1991},
    {id:103,name:"tinu",salary:18000,year_join:1975,year_resign:1992},
    {id:104,name:"jain",salary:25000,year_join:1978,year_resign:1985},
]
//print employee whose expereance>10years
var exp=employee.filter(emp=>(emp.year_resign-emp.year_resign)>=10)
forEach(emp=>console.log(emp.name))

//print all employee names only
//external iteration
for(let emp of employees){
    console.log(emp.name)
}

//foreach
//internal iteration
employees.forEach(emp=>console.log(emp.name))

// print all employees whose salary > 24000

var emp=employees.forEach(emp=>emp.salary>24000)
console.log(emp)

//find highest salaried employee
var salary=employees.
        map(emp=>emp.salary)
        .reduce((sal1,sal2)=>sal1>sal2?sal1:sal2)
        console.log(salary)