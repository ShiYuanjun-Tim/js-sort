var swap = require("./utils").swap;
var MinHeap = require("./dataStructure/MinHeap");

/* 头部到尾部冒泡 升序 
  i:[0,n-1)
    j:[0,n-i)
*/
function heapSort(arr) {
  if (arr == null || arr.length < 2) {
    return arr;
  }

  var a = new MinHeap();
  arr.forEach(e => {
    a.insert(e);
  });
  var ee = a.remove(),
    res = [];
  while (ee) {
    res.push(ee);
    ee = a.remove();
  }

  return res;
}

module.exports = heapSort;
module.exports.default = heapSort;
