const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when inputs are 2.4 and 3.6', function() {
      assert.strictEqual(calculateNumber('SUM', 2.4, 3.6), 6);
    });

    it('should return 0 when inputs are -1.4 and 1.4', function() {
      assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -2 when inputs are 1.4 and 2.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.5), -2);
    });

    it('should return -5 when inputs are -2.8 and 1.7', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.8, 1.7), -5);
    });
  });

  describe('DIVIDE', function() {
    it('should return 2 when inputs are 8.4 and 3.9', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 8.4, 3.9), 2);
    });

    it('should return "Error" when dividing by 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 8.4, 0), 'Error');
    });

    it('should return 0.5 when inputs are 2.4 and 4.2', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 4.2), 0.5);
    });
  });

  describe('Invalid type', function() {
    describe('Invalid type', function() {
        it('should return undefined when type is invalid', function() {
            assert.strictEqual(calculateNumber('INVALID', 2.4, 3.6), undefined);
        });
    });
  });
});
