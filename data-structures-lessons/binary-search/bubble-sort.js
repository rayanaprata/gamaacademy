var values = [34, 98, 2, 38, 39, 120, 41, 48, 5, 75, 88, 8, 10, 24, 28, 30, 1, 52, 59, 64, 4, 95, 3];

function order() {
    let start = 0;
    let end = values.length;
    let temp;

    for (i=0; i<values.length; i++) {
        for(pos = start; pos < end -1 -i; pos++) {
            if(values[pos] > values[pos + 1]) {
                temp = values[pos];
                values[pos] = values[pos + 1];
                values[pos + 1] = temp;
            }
        }
    }
}

order();
console.log(values);