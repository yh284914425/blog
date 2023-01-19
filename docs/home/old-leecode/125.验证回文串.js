/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (47.06%)
 * Likes:    386
 * Dislikes: 0
 * Total Accepted:    240.7K
 * Total Submissions: 509.4K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "race a car"
 * 输出: false
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {


    let left = 0
    let right = s.length - 1

    while (left < right) {
        const reg = /[a-zA-Z0-9]/
        while (left < right && !reg.test(s[left])) {
            left++
        }
        while (left < right && !reg.test(s[right])) {
            right--
        }


        if (left == s.length) {
            return true
        }
        if (left > right) {
            return false
        }

        if (s[left].toLowerCase() != s[right].toLowerCase()) {
            return false
        } else {
            left++
            right--

        }

    }
    return true

};

isPalindrome(`"\\"Sue,\\" Tom smiles, \\"Selim smote us.\\""`)
// @lc code=end