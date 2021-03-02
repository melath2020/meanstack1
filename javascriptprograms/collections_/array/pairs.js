var arr=[1,2,3,4,6];//6(2,4)

//find the pair of six

// 0   1  2  3  4
// 1   2  3  4  6
//l             u

arr=arr.sort((n1,n2)=>n1-n2)
var low=0;
var upp=arr.length-1;

var element=6;
while (low<upp) {  //0<4  8<3 1<3
    let tot=arr[low]+arr[upp];
    if(tot>element){
        upp=upp-1;
    }
    else if(tot<element){
        low=low+1;
    
    }
    else{
        console.log(arr[low]+","+arr[upp]);
        break;
    }   
}