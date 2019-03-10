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

MinHeap.prototype.remove = function() {
  var min = this.heaparr[0];
  if (this.heaparr.length > 1) {
    this.heaparr[0] = this.heaparr.pop()
    var idx = 0, left =  this.left(idx) , right = this.right(idx), minLeaf = right ? Math.min(right,left) : Math.min(left);
    while (minLeaf < this.heaparr[idx] ) {

      var minLeafIdx = this.left(idx) == minLeaf ? ((2*idx)+1) : ((2*idx)+2)
      swap(this.heaparr, minLeafIdx, idx);

      idx = minLeafIdx;
      left =  this.left(idx) ;
      right = this.right(idx);
      if(left == null){
        break;
      }
      minLeaf = right ? Math.min(right,left) : Math.min(left);
    }

  }else{
    return this.heaparr.pop()
  }
  return min
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


module.exports = MinHeap;
module.exports.default = MinHeap;
