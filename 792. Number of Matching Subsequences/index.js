/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
    let ret = 0;
    const isSubs = new Set();
    const isNotSubs = new Set();
    for (let item of words) {
        if (isSubs.has(item)) {
            ret++;
            continue
        }
        if (isNotSubs.has(item)) {
            continue
        }
        const searchRet = searchSubseq(s, item)
        if (searchRet) {
            isSubs.add(item)
            ret++
        } else {
            isNotSubs.add(item)
        }
    }
    return ret;
};

const searchSubseq = (s, word) => {
    let i = 0
    let prev = -1;
    while (i < word.length && s.length > 0) {
        const index = s.indexOf(word[i], prev + 1);
        if (index < 0) {
            return false
        } else {
            prev = index
            i++;
        }
    }
    return true
}