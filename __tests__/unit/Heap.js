jest.dontMock('../../src/Heap.es6');

describe('Person', function() {
 it('adds 1 + 2 to equal 3', function() {
   var Person = require('../../src/Heap.es6');
   var newPerson = new Person('bob');
   expect(newPerson.sayHello()).toBe("Hello bob!");
   expect(newPerson.sayHello()).toNotBe("Hello bob2!");
 });
});