class Employee{
    constructor(eid,ename,desig,salary){
        this.eid=eid;
        this.ename=ename;
        this.desig=desig;
        this.salary=salary;

    }

    printEmp=()=>{
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.desig);
        console.log(this.salary)
    }
}

let obj=new Employee(100,"ajay","developer",25000)


let obj1=new Employee(101,"vijay","detester",27000)


let obj2=new Employee(102,"rajan","tester",2000)


var arr=[]
arr.push(obj)
arr.push(obj1)
arr.push(obj2)
console.log(arr)

//print employee names only
arr.forEach(emp=>console.log(emp.ename))


//print employee name in upper case 
arr.forEach(emp=>console.log(emp.ename.toUpperCase()))

//print employee salary>23000
arr.filter(emp=>emp.salary>23000).forEach(emp=>console.log(emp.ename))

//find highest salary
var sal=arr.map(emp=>emp.salary).reduce((sal1,sal2)=>sal1>sal2?sal1:sal2)
console.log(sal)

//inheritance
//static method

//document object model

