/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 *
 * https://leetcode-cn.com/problems/word-search/description/
 *
 * algorithms
 * Medium (44.29%)
 * Likes:    835
 * Dislikes: 0
 * Total Accepted:    150.6K
 * Total Submissions: 339.7K
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
 * 
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * 
 * 
 * 
 * 示例:
 * 
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 * 
 * 给定 word = "ABCCED", 返回 true
 * 给定 word = "SEE", 返回 true
 * 给定 word = "ABCB", 返回 false
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * board 和 word 中只包含大写和小写英文字母。
 * 1 <= board.length <= 200
 * 1 <= board[i].length <= 200
 * 1 <= word.length <= 10^3
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    function dfs(row, col, startIndex, used, path, res) {

        if (startIndex == word.length) {
            res.push(JSON.parse(JSON.stringify(path)))
            console.log(res);
            return true
        }

        if (row < 0 || col < 0 || row >= board.length || col >= board[0].length || used[row][col] || board[row][col] != word[startIndex]) {
            return false
        }

        path.push([row, col])
        used[row][col] = true
        if (dfs(row + 1, col, startIndex + 1, used, path, res) || dfs(row, col + 1, startIndex + 1, used, path, res) ||
            dfs(row - 1, col, startIndex + 1, used, path, res) || dfs(row, col - 1, startIndex + 1, used, path, res)

        ) {
            return true
        }

        used[row][col] = false
        path.pop()
        return false


    }

    const used = []
    for (let i = 0; i < board.length; i++) {
        used.push([])

    }


    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == word[0] && dfs(i, j, 0, used, [], [])) {
                return true
            }

        }

    }
    return false
    // console.log(used);

};
exist([
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
], "ABCCED")
// @lc code=end