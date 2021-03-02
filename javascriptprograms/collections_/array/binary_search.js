var arr=[6,2,5,3,1,4]
//sort
arr.sort((no1,no2)=>no1-no2)
console.log(arr)

var element=4
var low=0
var upp=arr.length-1
var flg=0

while(low<upp){
    var mid=Math.floor((upp+low)/2);
    if(element>arr[mid])
    {
        low=mid+1;
    }
    else if(element<arr[mid])
    {
        upp=mid-1
    }
    else if(element==arr[mid])
    {
        flg=1;
        break;
    }
}
if(flg==0){
    console.log("element not found")
}
else{
    console.log("element found")
}

