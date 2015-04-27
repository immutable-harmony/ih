jest.autoMockOff();
var IM = require('immutable'), SLinkedList = require('../../src/SLinkedList');

describe('SLinkedList', () => {

  describe('new instance initialization', () => {
    let sLLEmpty = new SLinkedList();

    it('starts with a null head', () => {
      expect(sLLEmpty.head).toBeNull();
    });

    it('starts with a null tail', () => {
      expect(sLLEmpty.tail).toBeNull();
    });

    it('starts with an empty _lzStore', () => {
      expect(sLLEmpty._lzStore.size).toBe(0);
    });

    it('stores a number on initialization', () => {
      let sLLNumber = new SLinkedList(1);
      expect(sLLNumber._lzStore.size).toBe(1);
      expect(sLLNumber.head).toEqual(1);
      expect(sLLNumber.tail).toEqual(1);
    });

    it('stores a string on initialization', () => {
      let sLLString = new SLinkedList('string value');
      expect(sLLString._lzStore.size).toBe(1);
      expect(sLLString.head).toEqual('string value');
      expect(sLLString.tail).toEqual('string value');
    });

    it('stores an object on initialization', () => {
      let sLLObject = new SLinkedList({ name: 'clark' });
      expect(sLLObject._lzStore.size).toBe(1);
      expect(sLLObject.head).toEqual({ name: 'clark' });
      expect(sLLObject.tail).toEqual({ name: 'clark' });
    });

    it('stores an array on initialization', () => {
      let sLLArray = new SLinkedList(['random string', {'asdfasdf':'asdf'}, { name: 'anna' }, 26, ['tail value']]);
      expect(sLLArray._lzStore.size).toBe(5);
      expect(sLLArray.head).toEqual('random string');
      expect(sLLArray.tail).toEqual(['tail value']);
    });

  });

  describe('public interface instance methods', () => {
    let sLLNumber = new SLinkedList(1);
    let sLLArray = new SLinkedList(['random string', {'asdfasdf':'asdf'}, { name: 'anna' }]);

    it('gets-head', () => {
      expect(sLLNumber.head).toEqual(1);
      expect(sLLArray.head).toEqual('random string');
    });

    it('gets-tail', () => {
      expect(sLLNumber.tail).toEqual(1);
      expect(sLLArray.tail).toEqual({ name: 'anna' });
    });

    it('adds-to-tail', () => {
      let sLLNumber2 = sLLNumber.addToTail(2);
      expect(sLLNumber.tail).toEqual(1); // shouldn't mutate original list
      expect(sLLNumber2.head).toEqual(1);
      expect(sLLNumber2.tail).toEqual(2);
    });

    it('removes-head', () => {
      let sLLNumber2 = sLLNumber.addToTail(2);
      let sLLNumber3 = sLLNumber.removeHead();
      let sLLNumber4 = sLLNumber2.removeHead();
      expect(sLLNumber.head).toEqual(1); // shouldn't mutate original list
      expect(sLLNumber2.head).toEqual(1); // shouldn't mutate any copied lists
      expect(sLLNumber3.head).toBeNull();
      expect(sLLNumber4.head).toEqual(2);
      expect(sLLNumber4.tail).toEqual(2);
    });

  });

  describe('static methods', () => {

    it('generates-lz-store', () => {
      let seqCheck = (test) => expect(test).toEqual(jasmine.any(IM.Seq));
      let tests = [
                    SLinkedList.generateLzStore(),
                    SLinkedList.generateLzStore(1),
                    SLinkedList.generateLzStore('hey'),
                    SLinkedList.generateLzStore({ name: 'clark' }),
                    SLinkedList.generateLzStore([1, 2, 3, 4, 5])
                  ];
      tests.forEach(seqCheck);
    });

  });

});
