//source: npm heap

jest.dontMock('../../src/Heap.es6');
let Heap = require('../../src/Heap.es6');

describe('Heap', () => {

  describe('instance methods', () => {
    it('has a constructor', ()=>{
      let newHeap = new Heap();
      expect(!!newHeap).toBe(true);
    })
    it('peeks', ()=>{
    })
    it('replaces', ()=>{
    })
    it('heapifies', ()=>{
    })
    it('size', ()=>{
    })
    it('toArray', ()=>{
    })
    it('clone', ()=>{
    })

  });

  describe('static methods', ()=>{
    it('has a push method', ()=>{

    })
    it('has a pop method', ()=>{

    })
    it('pp (pushpop)', ()=>{
    })
    it('updateitem', ()=>{
    });
    it('nlargest/nsmallest', ()=>{
    });
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