describe ('greet function', function(){
    it('should greet Mender correctly', function() {
        assert.equal('Hello, Mender', greet('Mender'));
    });
    it('should greet Busi correctly', function() {
        assert.equal('Hello, Busi', greet('Busi'));
    });
})