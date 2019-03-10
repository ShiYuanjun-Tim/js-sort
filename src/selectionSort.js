var swap = require("./utils").swap;

/* 选择排序 升序 
  i:[0,n-1)
    j:[i,n)
*/
function selectionSort(arr) {
  if (arr == null || arr.length < 2) {
    return arr;
  }
  var n = arr.length;
  for (var head = 0; head < n - 1; head++) {
    var minIndex = head;
    for (var find = head; find < n; find++) {
      if (arr[find] < arr[minIndex]) {
        minIndex = find;
      }
    }
    swap(arr, head, minIndex);
  }

  return arr;
}

module.exports = selectionSort;
module.exports.default = selectionSort;
