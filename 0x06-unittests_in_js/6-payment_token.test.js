const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
    it('should resolve with the correct data when success is true', function(done) {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.eql({ data: 'Successful response from the API' });
                done();
            })
            .catch((error) => done(error));
    });
});
