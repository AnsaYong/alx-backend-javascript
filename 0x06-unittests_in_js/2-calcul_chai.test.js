const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when inputs are 2.4 and 3.6', function() {
      expect(calculateNumber('SUM', 2.4, 3.6)).to.equal(6);
    });

    it('should return 0 when inputs are -1.4 and 1.4', function() {
      expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -2 when inputs are 1.4 and 2.5', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 2.5)).to.equal(-2);
    });

    it('should return -5 when inputs are -2.8 and 1.7', function() {
      expect(calculateNumber('SUBTRACT', -2.8, 1.7)).to.equal(-5);
    });
  });

  describe('DIVIDE', function() {
    it('should return 2 when inputs are 8.4 and 3.9', function() {
      expect(calculateNumber('DIVIDE', 8.4, 3.9)).to.equal(2);
    });

    it('should return "Error" when dividing by 0', function() {
      expect(calculateNumber('DIVIDE', 8.4, 0)).to.equal('Error');
    });

    it('should return 0.5 when inputs are 2.4 and 4.2', function() {
      expect(calculateNumber('DIVIDE', 2.4, 4.2)).to.equal(0.5);
    });
  });

  describe('Invalid type', function() {
    it('should return undefined when type is invalid', function() {
      expect(calculateNumber('INVALID', 2.4, 3.6)).to.be.undefined;
    });
  });
});
