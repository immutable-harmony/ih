//source: npm heap
jasmine.verbose = true;

//let size = Symbol();
//Symbol...?
jest.dontMock('../../src/Heap.es6');
let Heap = require('../../src/Heap.es6');

describe('Heap', () => {

  describe('basic instance methods', () => {
    let h = new Heap();
    let i = new Heap();

    it('starts with size 0, and is empty', ()=>{
      expect(i.isEmpty()).toBe(true);
      expect(h.size).toBe(0);
    })

    it('pushes elements, tracking size and emptiness', ()=>{
      h.push(1);
      expect(h._bHeap.length).toBe(1);//incomplete test, should use size
      expect(h.isEmpty()).toBe(false);
    })

    it('peeks-max', ()=>{
      h.push(2);
      h.push(3);
      h.push(4);
      h.push(5);
      expect(h.peekMax()).toBe(5);

      i.push(2);
      i.push(1);
      expect(i.peekMax()).toBe(2);
    })

    it('peeks-min', ()=>{
      expect(i.peekMin()).toBe(1);
      expect(h.peekMin()).toBe(1);
    })

    it('deletes-max', ()=>{
      expect(h.deleteMax()).toBe(5);
      expect(h.peekMax()).toBe(4);
    })

    it('deletes-min', ()=>{
      expect(h.deleteMax()).toBe(1);
      expect(h.peekMin()).toBe(2);
    })

    it('replaces', ()=>{
      h.replace(1,99);
      h.peekMax().toBe(99);
    })

  });

  describe('core methods',() => {
    it('constructor', ()=>{
      let h = new Heap();
      expect(!!h).toBe(true);
      expect(h.empty()).toBe(true);
      expect(h.size).toBe(0);
      expect(h.peek()).toBe(undefined);
    })
    it('heapify', ()=>{
      let h = new Heap();
      h.heapify([1,2,3,4,5,6]);
      expect(h.size).toBe(6)
      expect(h.peek()).toBe(1);
      expect(h.empty()).toBe(false);
    })
    it('union', ()=>{
      let h = new Heap([1,2,3]);
      let i = new Heap([4,5,6]);
      let hi = h.union(i);

      expect(h.empty()).toBe(false);
      expect(i.empty()).toBe(false);
      expect(hi.size).toBe(6);
      expect(hi.empty()).toBe(false);
    })
    it('meld (preserve original heaps)', ()=>{
      let h = new Heap([1,2,3]);
      let i = new Heap([4,5,6]);
      let hi = h.meld(i);

      expect(h.empty()).toBe(undefined); //assert does not exist?
      expect(i.empty()).toBe(undefined);
      expect(hi.empty()).toBe(false);
      expect(hi.size).toBe(6);
    })
  })

  xdescribe('internal', ()=>{
    it('increase/decrease-key', ()=>{

    })
    it('delete', ()=>{

    })
    it('sift-up', ()=>{

    })
    it('sift-down', ()=>{

    })
  });
  // describe('', ()=>{
  //   it('has a constructor', ()=>{
  //   });
  //   it('has a constructor', ()=>{
  //   });
  // });
  // describe('', ()=>{
  //   it('has a constructor', ()=>{
  //   });
  //   it('has a constructor', ()=>{
  //   });
  // });

});