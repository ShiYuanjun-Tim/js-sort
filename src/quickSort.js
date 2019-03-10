var swap = require("./utils").swap;

/* 快排 升序 
   
*/
function quickSort(arr) {
  if (arr == null || arr.length < 2) {
    return arr;
  }
  var n = arr.length;

  _quickSort(arr, 0, n - 1);

  return arr;
}

function _quickSort(arr, left, right) {
  if (left < right) {
    var pivot = arr[right];
    var i = left,
      j = right - 1;

    while (true) {
      // 往右搜到远端直到大于等于 pivot的值 
      while (arr[i] < pivot && i < right) i++;
      // 往左搜索小于pivot的位置，并且j不能越过i
      while (arr[j] >= pivot && j > i) j--;
        // 如果i超过了j则中断
      if (i >= j) {
        break;
      }
      swap(arr, i, j);
    }

    var mid = j;

    if(i !== right){ //大道最远端时候不需要交换且 mid位属于right
      swap(arr, j, right);
    } else{
      mid = right
    }

    _quickSort(arr, left, mid - 1);
    _quickSort(arr, mid + 1, right);
  }
}

module.exports = quickSort;
module.exports.default = quickSort;
