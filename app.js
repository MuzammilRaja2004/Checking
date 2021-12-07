const bubblesort = (arr) => {
    let temp;
    for(let i = arr.length;i>0;i--){
        for(let j = i;j<i;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
let arr = [1,5,6,8,4,9,10,20,25,435,20,13,31,65,306,12,0,21,20,85,412]
document.write(arr)

console.log(bubblesort(arr))
document.write(bubblesort(arr) + "<br>")