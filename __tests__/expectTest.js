describe('sum', function() {
  it('expects Truthiness', function(){
    expect(true).toBe(true);
  });

  it('adds 1 + 2 to equal 3', function() {
    var sum = function sum(value1, value2) {
      return value1 + value2;
    };
    expect(sum(1, 2)).toBe(3);
  });
});