const { splitArray, mergeSortTwoArrays } = require("./index");

test("splitArray([1,2,3]) must to returns [[1],[2],[3]]", ()=>{
    const expected = [[1],[2],[3]];
    const result = splitArray([1,2,3]);
    expect(result).toEqual(expected)
})

test("mergeSortTwoArrays([2,5,9],[3,4,6,7,10],(a,b)=>a<b) must to returns [2,3,4,5,6,7,9,10]",()=>{
    const expected = [2,3,4,5,6,7,9,10];
    const result = mergeSortTwoArrays([2,5,9],[3,4,6,7,10],(a,b)=>a<b);
    expect(result).toEqual(expected)
})