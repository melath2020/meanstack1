var num=3
var lower=3;
var upper=28;

// 1**3=1  2**3=8 3**3=27

for(let i=1;i<=upper;i++){
    let data=i**num;
    if((data>=lower)&(data>=upper)){
        console.log(data)
    }
}