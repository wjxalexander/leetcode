var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let i = 1;
    const ret = [intervals[0]]
    while (i < intervals.length) {
        const lastTail = ret[ret.length - 1][1]
        const [newHead, newTail] = intervals[i]
        if (newHead > lastTail) {
            ret.push(intervals[i])
        } else {
            ret[ret.length - 1][1] = Math.max(newTail, lastTail)
        }
        i++
    }
    return ret
};

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
merge(intervals)