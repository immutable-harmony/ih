import 'core-js/shim';

export default class Heap {
  constructor(options) {
    this._bHeap = [];
    this.size = 0; //needs to dynamically update if referencing _.bHeap array...
    this._polarity = 1;
  }
  // get length
  min(){}

  max(){}

  isEmpty(){
    let length = this._bHeap.length;
    return (length === undefined) ? undefined : ((length === 0) ? true:false);
    // return this._bHeap.length === undefined ?
  }
  pop(){}
  heapify(){}
  heapSort(){
    //returns a sorted array of numbers;
  }
  push(number){
    let childIndex = this._bHeap.length;
    this._bHeap.push(number);

    let parentIndex = childIndex === 0 ? null : (childIndex % 2 === 0 ? childIndex/2 -1 : Math.floor(childIndex/2));
    while (!this.integrityCheck(parentIndex, childIndex)){
      this.switchNodes(parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = parentIndex === 0 ? null : (parentIndex % 2 === 0 ? parentIndex / 2 - 1 : Math.floor(parentIndex / 2))
    }
  };
  switchNodes(idx1, idx2){
    let temp = this._bHeap[idx1];
    this._bHeap[idx1] = this._bHeap[idx2];
    this._bHeap[idx2] = temp;
  }
  integrityCheck(parentIndex, childIndex){
    if (parentIndex === null){return true;}
    if (this._polarity === 1){
      //maxheap, parent should be larger
      if (this._bHeap[parentIndex] >= this._bHeap[childIndex]){return true;} else {return false;}
    } else if (this._polarity === -1){
      if (this._bHeap[parentIndex] <= this._bHeap[childIndex]){return true;} else {return false;}
    }
  }
}