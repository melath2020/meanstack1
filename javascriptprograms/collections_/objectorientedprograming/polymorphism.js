//many forms (more then one form)polymorphism


class MathsPg{
    add(){
        console.log("no arg method")
    }
    add(num1){
        console.log("single arg method")
    }
    add(num1,num2){
        console.log("two arg method")
    }
}

var m=new MathsPg()
m.add()
//same method different number of arguements
//will execute only recentlty implimented method 