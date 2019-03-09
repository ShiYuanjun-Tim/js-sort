
var swap = require("./utils").swap;

/* 头部到尾部冒泡 升序 */
function bubbleSort(arr) {
  if (arr == null || arr.length < 2) {
    return arr;
  }
  var n = arr.length;
//   控制趟数 对于长度n的数组最大趟数是 n-1 ,每次最少2个数
  for (var i = 0; i < n - 1; i++) {
    //  没趟需要跑到大最后第二个是多少
    for (var j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;
module.exports.default = bubbleSort;
