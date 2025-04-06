//1st solution

function twoSum(nums: number[], target: number): number[] {
    //Outer Loop
for (let i = 0; i < nums.length - 1; i++ ) {
    //Inner Loop
    for (let j = i + 1; j < nums.length ; j++ ){
if (nums[i] + nums[j] === target){
    return [i, j];
}
    }
}
};
//Valid solution but Time complexity: O(n²) and For a list of 10,000 items, you'll do around 50 million comparisons in the worst case.
//We can get rid of the inner loop and use hash map instead and Time complexity will be: O(n), so For 10,000 elements, this will run in about 10,000 operations instead of 50 million.

//2nd solution
function twoSum(nums: number[], target: number): number[] {
const result = new Map();
for (let i = 0; i < nums.length; i++ ) {
    const elementToFind = target - nums[i]
    if (result.has(elementToFind)) {
        return [i, result.get(elementToFind)] }
result.set(nums[i], i)
}
};