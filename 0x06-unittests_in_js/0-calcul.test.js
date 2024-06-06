const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 when inputs are 1.4 and 2.6', function() {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('should return 6 when inputs are 2.5 and 2.5', function() {
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });

  it('should return 6 when inputs are 3.7 and 2.3', function() {
    assert.strictEqual(calculateNumber(3.7, 2.3), 6);
  });

  it('should return 0 when inputs are -1.2 and 0.5', function() {
    assert.strictEqual(calculateNumber(-1.2, 0.5), 0);
  });

  it('should return 0 when inputs are 0 and 0', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
