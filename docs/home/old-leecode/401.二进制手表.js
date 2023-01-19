/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 *
 * https://leetcode-cn.com/problems/binary-watch/description/
 *
 * algorithms
 * Easy (53.52%)
 * Likes:    233
 * Dislikes: 0
 * Total Accepted:    25.1K
 * Total Submissions: 46.9K
 * Testcase Example:  '0'
 *
 * 二进制手表顶部有 4 个 LED 代表 小时（0-11），底部的 6 个 LED 代表 分钟（0-59）。
 * 
 * 每个 LED 代表一个 0 或 1，最低位在右侧。
 * 
 * 
 * 
 * 例如，上面的二进制手表读取 “3:25”。
 * 
 * 给定一个非负整数 n 代表当前 LED 亮着的数量，返回所有可能的时间。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入: n = 1
 * 返回: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16",
 * "0:32"]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 输出的顺序没有要求。
 * 小时不会以零开头，比如 “01:00” 是不允许的，应为 “1:00”。
 * 分钟必须由两位数组成，可能会以零开头，比如 “10:2” 是无效的，应为 “10:02”。
 * 超过表示范围（小时 0-11，分钟 0-59）的数据将会被舍弃，也就是说不会出现 "13:00", "0:61" 等时间。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
    let arr = ["1", "2", "4", "8", "01", "02", "04", "08", "16", "32"]
    if (num==0) {
        return ["0:00"]
    }
    function dfs(num, startIndex, path, res) {
        let hour = parseInt(path.split(":")[0])
        let minute = parseInt(path.split(":")[1])
        if (hour > 11 || minute > 59) {
            return
        }
        if (num == 0) {
            res.push(path)
            return
        }
        for (let i = startIndex; i < arr.length; i++) {
            let hour = parseInt(path.split(":")[0])
            let minute = parseInt(path.split(":")[1])
            if (hour > 11 || minute > 59) {
                continue
            }
            if (i < 4) {
                let min = minute < 10 ? "0" + minute : minute + ""
                dfs(num - 1, i + 1, (hour + parseInt(arr[i])) + ":" + min, res)

            } else {
                let min = minute + parseInt(arr[i]) < 10 ? "0" + (minute + parseInt(arr[i])) : (minute + parseInt(arr[i]))
                dfs(num - 1, i + 1, hour + ":" + min, res)

            }

        }
        return res

    }
    return dfs(num, 0, "0:00", [])

};
console.log(readBinaryWatch(2).sort());
// @lc code=end