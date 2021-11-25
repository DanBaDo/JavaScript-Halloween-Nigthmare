const { splitArray } = require("./index");

test("[1,2,3] must to returns [[1],[2],[3]]", ()=>{
    const expected = [[1],[2],[3]];
    const result = splitArray([1,2,3]);
    expect(result).toEqual(expected)
})