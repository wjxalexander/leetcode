/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
    const calcArr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            calcArr.push(-1)
        } else {
            findLastMinusOne(calcArr)
        }
    }
    const ret = calcArr.reduce((pre, cur) => pre + cur, 0)
    return ret
};

const findLastMinusOne = (arr) => {
    let tempRet = 0;
    let i = arr.length - 1;
    let pos = i;
    while (i >= 0) {
        if (arr[i] !== -1) {
            tempRet += arr[i]

        } else {
            pos = i;
            break;
        }
        i--;
    }
    arr[pos] = 2 * tempRet || 1
    arr.splice(pos + 1)
}

const s = "(()(()))"
console.log(scoreOfParentheses(s))