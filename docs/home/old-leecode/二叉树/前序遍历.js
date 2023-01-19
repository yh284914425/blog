class TreeNode {

    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

let root = new TreeNode(23)
let treenode1 = new TreeNode(34)
let treenode2 = new TreeNode(21)
let treenode3 = new TreeNode(99)
let treenode4 = new TreeNode(45)
let treenode5 = new TreeNode(60)
let treenode6 = new TreeNode(77)
let treenode7 = new TreeNode(90)

root.left = treenode1
root.right = treenode2
treenode1.left = treenode3
treenode2.left = treenode4
treenode2.right = treenode5
treenode3.left = treenode6
treenode3.right = treenode7

function preOrder(root) {
    if (!root) {
        return
    }
    console.log(root.val);
    if (root.left) {
        preOrder(root.left)
    }
    if (root.right) {
        preOrder(root.right)
    }
}


function preOrder1(root) {
    if (!root) {
        return
    }
    let stack = []
    stack.push(root)
    while (stack.length > 0) {
        let item = stack.pop()
        console.log(item.val);
        if (item.right) {
            stack.push(item.right)
        }
        if (item.left) {
            stack.push(item.left)
        }
    }

}

function levelOrder(root, res) {
    if (!root) {
        return
    }
    let queue = []
    queue.push(root)
    while (queue.length > 0) {
        let tmp = []
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let item = queue.shift()
            tmp.push(item.val)
            if (item.left) {
                queue.push(item.left)
            }
            if (item.right) {
                queue.push(item.right)
            }
        }
        res.push(tmp)

    }
    return res

}

//求一颗二叉树的最大深度


function maxDepth(root) {
    if (!root) {
        return 0
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

let level = -1

function toTargetLength(root, target, length) {
    if (!root) {
        return
    }
    if (root.val == target) {
        level = length
    }
    if (root.left) {
        toTargetLength(root.left, target, length + 1)
    }
    if (root.right) {
        toTargetLength(root.right, target, length + 1)
    }
}

// preOrder(root)
// console.log("---");
// preOrder1(root)
// console.log("---");
// preOrder2(root)

console.log((levelOrder(root, [])))

console.log(maxDepth(root));
toTargetLength(root, 99, 1)
console.log(level);