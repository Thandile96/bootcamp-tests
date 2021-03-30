describe('The fromWhere function', function(){
    it('should return the town the car is from', function(){
        assert.equal('Bellville', fromWhere('CY'));
    });
    it('should return the town the car is from', function(){
        assert.equal('Paarl', fromWhere('CJ'));
    });
    it('should return the town the car is from', function(){
        assert.equal('Cape Town', fromWhere('CA'));
    });
})