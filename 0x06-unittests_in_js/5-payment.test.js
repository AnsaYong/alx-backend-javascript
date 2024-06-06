const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  let spy;

  beforeEach(function() {
    // Create a spy on console.log
    spy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the spy
    spy.restore();
  });

  it('should log "The total is: 120" and only be called once for 100 and 20', function() {
    // Call sendPaymentRequestToApi with 100 and 20
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log is called once
    expect(spy.calledOnce).to.be.true;

    // Verify that console.log is called with the correct message
    expect(spy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" and only be called once for 10 and 10', function() {
    // Call sendPaymentRequestToApi with 10 and 10
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log is called once
    expect(spy.calledOnce).to.be.true;

    // Verify that console.log is called with the correct message
    expect(spy.calledWith('The total is: 20')).to.be.true;
  });
});
