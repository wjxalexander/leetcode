/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
    let ret = [];
    for (let i = 0; i < nums.length; i++) {
        const smallerArr = divide(nums.slice(i + 1), nums[i])
        ret.push(smallerArr.length)
    }
    return ret;
};


const divide = (arr, target) => {
    const length = arr.length;
    if (length === 1) {
        return arr[0] < target ? arr : []
    }
    if (length === 0) {
        return []
    }
    const left = arr.slice(0, length / 2);
    const right = arr.slice(length / 2);
    const smallerArr = conque(divide(left, target), divide(right, target), target);
    return smallerArr
}

const conque = (left, right, target) => {
    let ret = [];

    for (const num of left) {
        if (num < target) {
            ret.push(num)
        }
    }
    for (const item of right) {
        if (item < target) {
            ret.push(item)
        }
    }
    return ret
}

const test = [1, 0, 2]
countSmaller(test)