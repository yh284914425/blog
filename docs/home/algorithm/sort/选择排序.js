function selection(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.log(selection([3, 2, 3, 1, 6, 7, 4, 2]));
console.log(bubble([3, 2, 3, 1, 6, 7, 4, 2]));
console.log(insert([3, 2, 3, 1, 6, 7, 4, 2]));
console.log(guibing([3, 2, 3, 1, 6, 7, 4, 2]));

function bubble(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function insert(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
}

function guibing(arr) {
  function f(arr, start, end) {
    if (start == end) {
      return [arr[start]];
    }
    let res = [];
    let mid = Math.floor((start + end) / 2);
    let left = f(arr, start, mid);
    let right = f(arr, mid + 1, end);
    let i = 0,
      j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        res.push(left[i]);
        i++;
      } else {
        res.push(right[j]);
        j++;
      }
    }
    if (i < left.length) {
      while (i < left.length) {
        res.push(left[i]);
        i++;
      }
    }
    if (j < right.length) {
      while (j < right.length) {
        res.push(right[j]);
        j++;
      }
    }
    return res;
  }

  return f(arr, 0, arr.length - 1);
}
