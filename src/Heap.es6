import 'core-js/shim';

export default class Heap {
  constructor(options) {
    this._bHeap = [];
    this.size = 0;
  }

  min(){}

  max(){}

  isEmpty(){
    let length = this._bHeap.length;
    return (length === undefined) ? undefined : ((length === 0) ? true:false);
    // return this._bHeap.length === undefined ?
  }
  push(){}
  pop(){}
  heapSort(){}
  heapify(){}
  integrityCheck(){}
}