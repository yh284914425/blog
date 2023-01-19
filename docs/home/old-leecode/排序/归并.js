function guibing(arr) {


    function guibingSort(arr, left, right, tmp) {
        if (left >= right) {
            return
        }

        let mid = Math.floor((left + right) / 2)

        guibingSort(arr, left, mid, tmp)
        guibingSort(arr, mid + 1, right, tmp)
        let i = left
        let j = mid + 1

        let tempIndex = left
        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) {
                tmp[tempIndex++] = arr[i++]
            } else {
                tmp[tempIndex++] = arr[j++]
            }
        }

        while (i <= mid) {
            tmp[tempIndex++] = arr[i++]
        }
        while (j <= right) {
            tmp[tempIndex++] = arr[j++]
        }

        for (let k = left; k <= right; k++) {
            arr[k] = tmp[k]
        }

    }
    guibingSort(arr, 0, arr.length - 1, new Array(arr.length))
}


let arr = [3, 2, 3, -1, 23, 45, -4, 4, 56, 6]

guibing(arr)
console.log(arr);