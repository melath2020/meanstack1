var arr=[8,6,2,7,3]

arr.sort((no1,no2)=>no1>no2?1:-1)
console.log(arr)

//no2 comes after no1
//sorting

// for(let i=0;i<arr.length;i++){
//     for(j=1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             var temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr)