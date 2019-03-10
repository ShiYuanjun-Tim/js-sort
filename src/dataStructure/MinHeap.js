var swap = require("../utils").swap;

/* 
Below table shows indexes of other nodes for the ith node, i.e., Arr[i]:
Arr[(i-1)/2]	Returns the parent node
Arr[(2*i)+1]	Returns the left child node
Arr[(2*i)+2]	Returns the right child node

*/
function MinHeap(arr) {
  this.heaparr = [];
}

MinHeap.prototype.insert = function(ele) {
  this.heaparr.push(ele);
  if (this.heaparr.length > 1) {
    var idx = this.heaparr.length - 1;
    while (this.heaparr[idx] < this.parent(idx)) {
      var parentIdx = this.parentIdx(idx);
      swap(this.heaparr, parentIdx, idx);
      idx = parentIdx;
    }
  }
};

MinHeap.prototype.getMin = function() {
  return this.heaparr[0];
};

MinHeap.prototype.parent = function(i) {
  return this.heaparr[this.parentIdx(i)];
};
MinHeap.prototype.parentIdx = function(i) {
  return Math.floor((i - 1) / 2);
};

MinHeap.prototype.left = function(i) {
  return this.heaparr[i * 2 + 1];
};

MinHeap.prototype.right = function(i) {
  return this.heaparr[i * 2 + 2];
};

MinHeap.prototype.heapify = function() {};

module.exports = MinHeap;
module.exports.default = MinHeap;
