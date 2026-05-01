let array=[1,2,3,4,5,6,7,8,9,10,11];
let target=0;

function binarySearch(arr,target){
    let left=0;
    let right=arr.length-1;
    let m= Math.floor((left+right)/2);

    while(left<=right){
        if(arr[m]===target){
            return m;
        }
        else if(arr[m]<target){
            left=m+1;
        }
        else{
            right=m-1;
        }
        m= Math.floor((left+right)/2);
    }
    return -1;
}
console.log(binarySearch(array,target));