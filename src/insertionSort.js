var swap = require("./utils").swap;

/* 头部到尾部冒泡 升序 */
function insertionSort(arr) {
  if (arr == null || arr.length < 2) {
    return arr;
  }
  var n = arr.length;

  for (var head = 1; head < n; head++) {
    var find = head-1;
    while (find >= 0 && ( arr[head] < arr[find] )) {
      find--;
    }
    if(find == head-1)continue;
    var toMove = arr[head];
    for (var move = head - 1; move >= find + 1; move--) {
      arr[move + 1] = arr[move];
    }
    arr[find + 1] = toMove;
  }

  return arr;
}

module.exports = insertionSort;
module.exports.default = insertionSort;
