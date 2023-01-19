const arr = [3, 4, 52, 4, 2, 4, 1, -3, 5, 2, -7]
//不稳定

for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i]
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < min) {
            min = arr[j]
            minIndex = j
        }

    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]

}

console.log(arr);

//对于 选择、冒泡和插入  先思考要几轮 
//然后思考每一轮要干什么事情