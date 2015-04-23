jest.dontMock('../../src/Heap.es6');
let Heap = require('../../src/Heap.es6');

describe('Heap', () => {

  describe('class Properties', () => {
    it('has a constructor', ()=>{
      let newHeap = new Heap();
      expect(!!newHeap).toBe(true);
    })
  });
});