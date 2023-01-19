function bubbleSort(arr) {


    for (let i = 0; i < arr.length - 1; i++) {
        // for (let j = i; j < arr.length - 1; j++) {
        //     if (arr[j] > arr[j + 1]) {
        //         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        //     }

        // }
        for (let j = 0; j < arr.length - 1-i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }

        }
    }
    return arr
}

console.log(bubbleSort([3, 4, 52, 4, 2, 4, 1, -3, 5, 2, -7]));
// console.log(bubbleSort([3, 1,2,5,23,65,-1]));