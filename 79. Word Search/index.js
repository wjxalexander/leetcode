/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let k = 0 // word index
    const explored = Array.from({ length: board.length }, () => Array.from({ length: board[0].length }, () => 0))
    const row = board.length;
    const col = board[0].length
    const isLegalIndex = (i, j) => {
        return i >= 0 && i < row && j >= 0 && j < col
    }
    const _backTrackHelper = (i, j, last) => {
        if (k === word.length) {
            return true
        }
        const left = [i, j - 1]
        const right = [i, j + 1]
        const top = [i - 1, j]
        const down = [i + 1, j]
        for (const [x, y] of [left, right, top, down]) {
            if (isLegalIndex(x, y) && !explored[x][y] && board[x][y] === word[k]) {
                k++
                explored[x][y] = 1
                const ret = _backTrackHelper(x, y, [i, j])
                if (ret) {
                    return true
                }
                k--
                explored[x][y] = 0

            }
        }
        return false
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                k++
                explored[i][j] = 1
                const ret = _backTrackHelper(i, j, [-1, -1])
                if (ret) {
                    return true
                }
                k--
                explored[i][j] = 0
            }
        }
    }
    return false
};

const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]
const word = "ABCCED"
exist(board, word)