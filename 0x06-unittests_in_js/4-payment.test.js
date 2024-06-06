const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  let stub;

  beforeEach(function() {
    // Stub the Utils.calculateNumber function to always return 10
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(function() {
    // Restore the original Utils.calculateNumber function
    stub.restore();
  });

  it('should call Utils.calculateNumber with SUM and the correct arguments', function() {
    const spy = sinon.spy(console, 'log');

    const totalAmount = 100;
    const totalShipping = 20;
    
    const result = sendPaymentRequestToApi(totalAmount, totalShipping);

    // Check if the stub was called once
    expect(stub.calledOnce).to.be.true;

    // Check if the stub was called with the correct arguments
    expect(stub.calledWith('SUM', totalAmount, totalShipping)).to.be.true;

    // Check if console.log was called with the correct message
    expect(spy.calledWith('The total is: 10')).to.be.true;

    // Check the result of the function call
    expect(result).to.equal(10);

    // Restore the spy
    spy.restore();
  });
});
