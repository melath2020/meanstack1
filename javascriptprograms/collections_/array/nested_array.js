var employees=[
    [100,"ajay","developer",25000],
    [101,"vijay","developer",30000],
    [102,"rjun","qa",20000]
]

//print employee name only

for(employee of employees){
  console.log(employee[1])
}



//print employee designation
for(employee of employees){
    console.log(employee[2])
  }

  //print all employee details whose salary<25000

  for (let emp of employees){
      if(emp[3]>25000){
          console.log(emp)
      }
  }

  //find total all employee salary
  var total=0;
  for (let emp of employee){
      total=total+emp[30]
  }
  console.log(total)