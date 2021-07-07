var values = [5, 8, 10, 24, 28, 30, 34, 38, 39, 41, 48, 52, 59, 64, 75, 88, 95, 98, 120];

function sequentialSearch(num){
    for(i=0; i<values.length; i++){
        if(num == values[i]){
            return i;
        }
    }
    return -1;
}

function binarySearch(num){
    let start, end, half; 
    let count = 0;
    start = 0;
    end = values.length;
    while(start <= end){
        half = parseInt((start + end) / 2);
        count++;
        if (num == values[half]){
            console.log(`I found it in ${count} steps.`);
            return half;
        } else {
            if (num > values[half]){
                start = half + 1;
            } else {
                end = half - 1;
            }
        }
    }
    console.log(`Not found in ${count} steps.`);
    return -1;
}

console.log(binarySearch(10));
console.log(binarySearch(5));
console.log(binarySearch(120));
console.log(binarySearch(121));
