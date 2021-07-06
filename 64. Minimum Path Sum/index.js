var minPathSum = function (grid) {
    const dp = Array.from(grid, (item) => Array.from(item, () => 0))
    dp[0][0] = grid[0][0]
    for (let i = 1; i < grid[0].length; i++) {
        dp[0][i] = dp[0][i - 1] + grid[0][i]
    }
    for (let j = 1; j < grid.length; j++) {
        dp[j][0] = dp[j - 1][0] + grid[j][0]
    }
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1])
        }
    }
    return dp[dp.length - 1][dp[0].length - 1]
};

const grid = [[1, 2, 3], [4, 5, 6]]

minPathSum(grid)