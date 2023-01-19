/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 *
 * https://leetcode-cn.com/problems/sort-colors/description/
 *
 * algorithms
 * Medium (57.76%)
 * Likes:    829
 * Dislikes: 0
 * Total Accepted:    189.4K
 * Total Submissions: 326.8K
 * Testcase Example:  '[2,0,2,1,1,0]'
 *
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [2,0,2,1,1,0]
 * 输出：[0,0,1,1,2,2]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [2,0,1]
 * 输出：[0,1,2]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[0]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：nums = [1]
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == nums.length
 * 1 
 * nums[i] 为 0、1 或 2
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你可以不使用代码库中的排序函数来解决这道题吗？
 * 你能想出一个仅使用常数空间的一趟扫描算法吗？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    return nums.sort((a, b) => a - b)
};


function binarySearch(arr, target) {


    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let middleIndex = Math.floor((left + right) / 2)
        let middleVal = arr[middleIndex]
        if (target < middleVal) {
            right = middleIndex - 1
        } else if (target > middleVal) {
            left = middleIndex + 1
        } else {
            while (arr[++middleIndex] == middleVal);
            if (middleIndex = arr.length) {
                return -1
            }
            return middleIndex
        }

    }
    return -1
}

console.log(binarySearch([1, 3, 4, 5, 6, 8, 8, 8], 8));
// @lc code=end