describe('The transportFee function', function(){
    it('should return the right price for the Morning shift', function(){
        assert.equal('R20', transportFee('morning'));
    });
    it('should return the right price for the Afternoon shift', function(){
        assert.equal('R10', transportFee('afternoon'));
    });
    it('should return the right price for the Nightshift', function(){
        assert.equal('free', transportFee('nightshift'));
    });
})