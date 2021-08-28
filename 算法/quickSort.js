function quickSort(list, begin, end) {
  if (end <= begin) return;
  let pivot = partition(list, begin, end)
  quickSort(list, begin, pivot - 1)
  quickSort(list, pivot + 1, end)
}

function partition(list, begin, end) {
  let pivot = end, counter = begin
  for(let i = begin;i<end;i++) {
    if (list[i] < list[pivot]) {
      // [list[i], list[counter]] = [list[counter], list[i]]
      let prev = list[i];
      list[i] = list[counter]
      list[counter] = prev
      counter++
    }
  }
  // [list[pivot], list[counter]] = [list[counter], list[pivot]]
  let prev = list[pivot];
  list[pivot] = list[counter]
  list[counter] = prev

  return counter // 最后返回第几位
}

let arr = [2,5,2,8,9,4]

quickSort(arr, 0, 5)
console.log(arr)