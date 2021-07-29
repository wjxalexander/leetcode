/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const length = nums.length;
    if (length === 1) {
        return nums;
    }
    const left = nums.slice(0, length / 2);
    const right = nums.slice(length / 2);
    return conquerAndCompare(lengthOfLIS(left), lengthOfLIS(right));
};

var conquerAndCompare = (arr1, arr2) => {
    let ret = []
    const length1 = arr1.length;
    const length2 = arr2.length;
    let i = 0;
    let j = 0;
    while (i < length1 && j < length2) {
        if (arr1[i] < arr2[j]) {
            ret.push(arr1[i]);
            i++
        } else {
            j++
        }
    }
    if (j < length2) {
        ret = ret.concat(arr2.slice(j))
    }
    if (ret.length === 0) {
        if (length1 !== length2) {
            return length1 > length2 ? arr1 : arr2
        } else {
            return arr1[0] < arr2[0] ? arr1 : arr2
        }
    }
    return ret
}
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const ret = lengthOfLIS(nums)