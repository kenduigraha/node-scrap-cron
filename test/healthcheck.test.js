const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);
require('dotenv').config()

describe('healhtcheck Rest API', () => {
    // it('it should response with status 200', (done) => {
    //     chai.request(process.env.HOST + ':' + process.env.PORT)
    //     .get('/healthcheck')
    //     .end((err, res) => {
    //         expect(res.body).to.be.an('object');
    //         res.should.be.json;
    //         res.should.have.status(200);
    //         done();
    //     });
    // });
});