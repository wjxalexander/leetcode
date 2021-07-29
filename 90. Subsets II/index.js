/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let ret = []
    let out = []
    const set = new Set()
    const length = nums.length
    nums.sort((a, b) => a - b)
    _help(nums, ret, out, 0, length, set)
    return ret
};

var _help = function (nums, ret, out, start, length, set) {
    if (out.length <= length) {
        const contactString = [...out].sort((a, b) => a - b).join()
        if (set.has(contactString)) {
            return
        } else {
            ret.push([...out])
            set.add(contactString)
        }
    }
    if (out.length === length) {
        return
    }
    for (let i = start; i < length; i++) {
        out.push(nums[i])
        _help(nums, ret, out, i + 1, length, set)
        out.pop()
    }
}
const nums = [4, 4, 4, 1, 4]
const ret = subsetsWithDup(nums)
console.log(ret)