/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
    const M = 1000000000 + 7;
    const matrix = Array.from({ length: m }, () => Array.from({ length: n }, () => 0))
    let ret = 0;
    let move = 0;
    let currentRow = startRow
    let currentColumn = startColumn
    matrix[currentRow][currentColumn] = 1;
    while (move < maxMove) {
        const temp = Array.from({ length: m }, () => Array.from({ length: n }, () => 0))
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (i === m - 1) {
                    ret = (ret + matrix[i][j]) % M
                }
                if (i === 0) {
                    ret = (ret + matrix[i][j]) % M
                }
                if (j === j - 1) {
                    ret = (ret + matrix[i][j]) % M
                }
                if (j === 0) {
                    ret = (ret + matrix[i][j]) % M
                }
                temp[i][j] = (
                    ((i > 0 ? matrix[i - 1][j] : 0) + (i < m - 1 ? matrix[i + 1][j] : 0)) % M +
                    ((j > 0 ? matrix[i][j - 1] : 0) + (j < n - 1 ? matrix[i][j + 1] : 0)) % M
                ) % M;
            }
            matrix = temp
        }
        move++
    }

    return ret % M;
};

findPaths(2, 2, 2, 0, 0)