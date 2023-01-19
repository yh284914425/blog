/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 *
 * https://leetcode-cn.com/problems/largest-number/description/
 *
 * algorithms
 * Medium (38.05%)
 * Likes:    502
 * Dislikes: 0
 * Total Accepted:    56.6K
 * Total Submissions: 148.4K
 * Testcase Example:  '[10,2]'
 *
 * 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。
 * 
 * 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [10,2]
 * 输出："210"
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,30,34,5,9]
 * 输出："9534330"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1]
 * 输出："1"
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：nums = [10]
 * 输出："10"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {

    // function backtrace(nums, path, res, used) {
    //     if (path.length == nums.length) {
    //         res.push(parseInt(path.join("")))
    //         return
    //     }

    //     let set = new Set()
    //     for (let i = 0; i < nums.length; i++) {
    //         if (set.has(nums[i]) || used[i]) {
    //             continue
    //         }
    //         used[i] = true
    //         path.push(nums[i])
    //         backtrace(nums, path, res, used)
    //         used[i] = false
    //         path.pop()

    //     }
    //     return res

    // }
    // return Math.max(...backtrace(nums, [], [], []))+""
    let arr = nums.sort((a, b) => {
        return parseInt(b + "" + a) - parseInt(a + "" + b)
    })
    if (arr[0] == 0) {
        return "0"
    }
    return arr.join("") + ""

};

console.log(largestNumber([3, 30, 34, 5, 9])); // @lc code=end