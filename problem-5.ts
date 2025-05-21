
function processValue(value: string | number): number{
    if(typeof value === 'string'){
        return value.length;
    }
    else{
        return value * 2;
    }
}

processValue("Hello");
processValue(10);


// console.log(processValue("Hello"));
// console.log(processValue(10));