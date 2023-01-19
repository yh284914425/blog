function insertSort(arr) {


    for (let i = 0; i < arr.length - 1; i++) {
        // for (let j = i + 1; j < arr.length; j++) {
        //     if (arr[i] > arr[j]) {
        //         [arr[i], arr[j]] = [arr[j], arr[i]]
        //     }

        // }
        for (let j = i + 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            }

        }
    }
    return arr
}

console.log(insertSort([3, 4, 52, 4, 2, 4, 1, -3, 5, 2, -7]));



// class TreeNode {
//     constructor(val) {
//         this.val = val
//         this.left = null
//         this.right = null
//     }
// }

// function test(arr) {
//     if (arr.length<= 0) {
//         return null
//     }
//     if (arr.length == 1) {
//         return new TreeNode(arr[0])
//     }
//     let root = arr[arr.length - 1]
//     let rootNode = new TreeNode(root)
//     let index = 0
//     while (arr[index] < root) {
//         index++
//     }

//     rootNode.left = test(arr.slice(0, index))
//     rootNode.right = test(arr.slice(index, -1))
//     return rootNode

// }

// console.log(test([1,2,3,4,5]));


function test(len, now, rest, target, count) {
    if (rest < 0) {
        return count
    }

    if (rest == 0 && now == target) {
        return count + 1
    }

    if (now == 1) {
        return test(len, now + 1, rest - 1, target, count)
    }
    if (now == len) {
        return test(len, now - 1, rest - 1, target, count)
    }
    return test(len, now + 1, rest - 1, target, count) + test(len, now - 1, rest - 1, target, count)



}


console.log(test(7, 3, 3, 4, 0));