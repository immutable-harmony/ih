import 'core-js/shim';
var IM = require('immutable');

export default class SLinkedList {

  constructor(itemOrList = []) {
    this._lzStore = SLinkedList.generateLzStore(itemOrList);
  }

  get store() {
    return this._lzStore.toJS();
  }

  get head() {
    return this._lzStore.first() || null;
  }

  get tail() {
    return this._lzStore.last() || null;
  }

  addToTail(valueOrNode) {
    let newList;
    if (this.tail) {
      newList = new SLinkedList(this._lzStore.concat(valueOrNode).toJS());
    } else {
      newList = new SLinkedList(valueOrNode);
    }
    return newList;
  }

  removeHead() {
    return new SLinkedList(this._lzStore.rest().toJS());
  }

  static generateLzStore(itemOrList) {
    return Array.isArray(itemOrList) ? IM.Seq(itemOrList) : IM.Seq([].concat(itemOrList));
  }

}
