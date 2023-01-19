/*
 * @lc app=leetcode.cn id=357 lang=javascript
 *
 * [357] 计算各个位数不同的数字个数
 *
 * https://leetcode-cn.com/problems/count-numbers-with-unique-digits/description/
 *
 * algorithms
 * Medium (51.60%)
 * Likes:    123
 * Dislikes: 0
 * Total Accepted:    19.8K
 * Total Submissions: 38.5K
 * Testcase Example:  '2'
 *
 * 给定一个非负整数 n，计算各位数字都不同的数字 x 的个数，其中 0 ≤ x < 10^n 。
 * 
 * 示例:
 * 
 * 输入: 2
 * 输出: 91 
 * 解释: 答案应为除去 11,22,33,44,55,66,77,88,99 外，在 [0,100) 区间内的所有数字。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
    if (n == 0) {
        return 1
    }
    let count = 0
    // let res = []

    function backtracking(x, path) {
        if (n == x) {
            console.log(JSON.parse(JSON.stringify(path)));
            count++
            return
        }
        if (x > n) {
            return
        }

        let start = x > 0 ? 0 : 1
        for (let index = 0; index < 10; index++) {
            if (path.indexOf(index) != -1) {
                continue
            }

            path.push(index)
            backtracking(x + 1, path)
            path.pop()

        }
        return count

    }
    if (n == 1) {
        return backtracking(0, [])
    }
    return backtracking(0, []) + 1


};
// console.log(countNumbersWithUniqueDigits(2));


function bubbleSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }

        }

    }
    return arr

}


function insertSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            }

        }

    }
    return arr
}

function quickSort(arr) {
    function quick(arr, lo, hi) {
        if (lo >= hi) {
            return arr
        }
        let prev = arr[hi]
        let less = lo
        let great = lo
        for (; great <= hi; great++) {
            if (arr[great] < prev) {
                [arr[great], arr[less]] = [arr[less], arr[great]]
                less++
            }
        }
        [arr[hi], arr[less]] = [arr[less], arr[hi]]

        quick(arr, lo, less - 1)
        quick(arr, less + 1, hi)
        return arr
    }
    return quick(arr, 0, arr.length - 1)


}

console.log(bubbleSort([4, 1, -1, 3, 4, 56, 7, 25, 62, 42]));
console.log(insertSort([4, 1, -1, 3, 4, 56, 7, 25, 62, 42]));
console.log(quickSort([4, 1, -1, 3, 4, 56, 7, 25, 62, 42]));
// @lc code=end