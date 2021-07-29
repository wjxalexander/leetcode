/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    const dp = [triangle[0]]
    const triangleLeng = triangle.length
    if (triangleLeng === 1) {
        return triangle[0][0]
    }
    let i = 1
    while (i < triangle.length) {
        const currentRow = triangle[i]
        dp[i] = []
        for (let j = 0; j < currentRow.length; j++) {
            const upper = dp[i - 1][j] ?? Number.MAX_SAFE_INTEGER
            const upperLeft = dp[i - 1][j - 1] ?? Number.MAX_SAFE_INTEGER
            dp[i][j] = triangle[i][j] + Math.min(upper, upperLeft)
        }
        i++
    }

    const min = Math.min(...dp[dp.length - 1])
    return min
};

const tri = [[1], [-5, -2], [3, 6, 1], [-1, 2, 4, -3]]
minimumTotal(tri)