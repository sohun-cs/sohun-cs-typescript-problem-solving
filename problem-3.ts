function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((x, y) => x.concat(y))
}

concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);


// console.log(concatenateArrays(["a", "b"], ["c"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));