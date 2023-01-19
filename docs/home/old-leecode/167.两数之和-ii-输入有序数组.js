/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {

    for (let i = 0; i < numbers.length; i++) {
        let index = binarySearch2(numbers, i + 1, numbers.length - 1, target - numbers[i])
        if (index != -1) {
            return [i + 1, index + 1]
        }
    }
};

function binarySearch(arr, left, right, target) {
    if (left > right) {
        return -1
    }
    let middle = Math.floor((left + right) / 2)
    if (target < arr[middle]) {
        return binarySearch(arr, left, middle - 1, target)
    } else if (target > arr[middle]) {
        return binarySearch(arr, middle + 1, right, target)
    } else {
        return middle
    }

}

function binarySearch2(arr, left, right, target) {
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (target < arr[middle]) {
            right = middle - 1
        } else if (target > arr[middle]) {
            left = middle + 1
        } else {
            return middle
        }
    }
    return -1
}


// @lc code=end