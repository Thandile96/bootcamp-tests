describe('The countRegNumber function', function(){
    it('should return the total of three registration numbers in the string', function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });

    it('should return the total of two registration numbers in the string', function(){
        assert.equal(2, countRegNumber('CA 182736,CY 523519'));
    });

    it('should return the total of one registration number in the string', function(){
        assert.equal(1, countRegNumber('CA 182736'));
    });
})