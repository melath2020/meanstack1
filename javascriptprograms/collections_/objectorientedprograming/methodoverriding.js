class Parent{
    phone=()=>{
        console.log("have nokia 5310")
    }
}
class Child extends Parent{
    phone=()=>{
        console.log("i have i phone")
    }
}
var ch=new Child()
ch.phone()