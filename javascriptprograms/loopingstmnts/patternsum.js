// 2
// 2+22

// 3
// 3+33+333

// 4
// 4+44+444+4444

var num=3;
var i=1;
var sum=0;
var total=0;
while(i<=num){
    total=total*10+num;
    sum=sum+total;
    i++
}
console.log(sum)