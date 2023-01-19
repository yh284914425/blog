class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.dummyNode = new ListNode(-1)
        this.dummyNode.next = this.head
        this.size = 0
    }
    insertAtIndex(index, val) {
        let newNode = new ListNode(val)

        let cur = this.dummyNode

        while (index--) {
            cur = cur.next
        }

        newNode.next = cur.next
        cur.next = newNode
    }
    reverse() {
        let pre = null
        let cur = this.dummyNode.next
        while (cur) {

            let next = cur.next
            cur.next = pre
            pre = cur
            cur = next
        }
        this.dummyNode.next = pre
    }
    removeVal(val) {
        let cur = this.dummyNode.next
        let pre = this.dummyNode

        while (cur) {
            if (cur.val == val) {
                pre.next = cur.next
                cur = cur.next
            } else {
                pre = cur
                cur = cur.next
            }
        }


    }
    toString() {
        let str = ""
        let cur = this.dummyNode.next

        while (cur) {
            str += `${cur.val}->`
            cur = cur.next
        }
        str += `null`
        console.log(str);
    }

}

let linkeList = new LinkedList()
linkeList.insertAtIndex(0, 10)
linkeList.insertAtIndex(0, 10)
linkeList.insertAtIndex(0, 3)
linkeList.insertAtIndex(0, 7)
linkeList.toString()
linkeList.removeVal(10)
linkeList.toString()
linkeList.reverse()
linkeList.toString()
