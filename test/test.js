var expect = chai.expect;
var should = chai.should();
mocha.setup('bdd');



describe('sumOfSquare', function() {
  it('should be a function', function() {
    expect(sumOfSquare).to.be.a('function');
  });
  it('should take a number for a parameter', function() {
    number.should.equal('number');
  });
  it('should create a empty array', function() {
    expect([]).to.be.empty;
  });
});


mocha.run();