const request = require('request');
const app = require('./api');

describe('Index page', () => {
    it('should return the correct status code', (done) => {
        request.get('http://localhost:7865', (err, res) => {
            expect(res.statusCode).toBe(200);
            done();
        });
    });

    it('should return the correct result', (done) => {
        request('http://localhost:7865', (err, res, body) => {
            expect(body).toBe('Welcome to the payment system');
            done();
        });
    });
});
