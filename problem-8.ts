async function squareAsync(n: number): Promise<number>{

    return new Promise((res, rej) => {
        setTimeout(() => {
            if(n>0){
                res(n*n);
            }
            else{
                rej("Negative number not allowed");
            }
        })
    })
}

squareAsync(4).then(console.log);        // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed

