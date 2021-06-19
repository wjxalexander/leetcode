/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    const newStack = [pushed[0]];
    let ret = true;
    let i = 1;
    while (popped.length > 0) {
        if (newStack[newStack.length - 1] === popped[0]) {
            newStack.pop();
            popped.shift();
            if (popped.length > 0 && pushed[i] === popped[0]) {
                newStack.push(pushed[i++])
            }
        } else {
            if (i < pushed.length) {
                newStack.push(pushed[i++])
            } else {
                ret = false;
                break;
            }
        }
    }
    return ret;
};

const pushed = [1, 2, 3, 4, 5]
const popped = [4, 3, 5, 1, 2]
const ret = validateStackSequences(pushed, popped)
console.log(ret)