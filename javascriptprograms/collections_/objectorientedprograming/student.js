class Student{
    setStudent=(rol,name,course)=>{
        this.rol=rol;
        this.name=name;
        this.course=course;
    }
    printStudent=()=>{
        console.log("name=",this.name);
        console.log("rol"+this.rol),
        console.log("course"+this.course)
    }
}
let obj=new Student()
obj.serStudent(100,"ajay","mca")
obj.printStudent()
//setStudent() duty?
//initializing instance variable

//constructor()
//duty of constructor is initializing instance variable



//different types of variables
//instance variables
//instance variables are always prepended with this keyword
//we can access instance variable with in class by using this keyword
//we can access instance variable outside class by using reference name.instance variable name
