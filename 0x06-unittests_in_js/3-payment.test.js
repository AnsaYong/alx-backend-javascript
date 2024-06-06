const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with SUM and the correct arguments', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');

    const totalAmount = 100;
    const totalShipping = 20;
    
    const result = sendPaymentRequestToApi(totalAmount, totalShipping);

    // Check if the spy was called once
    expect(spy.calledOnce).to.be.true;

    // Check if the spy was called with the correct arguments
    expect(spy.calledWith('SUM', totalAmount, totalShipping)).to.be.true;

    // Check the result of the function call
    expect(result).to.equal(120);

    // Restore the original function
    spy.restore();
  });
});
