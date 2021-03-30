describe('The allPaarl function', function(){
    it('should return all the registration numbers in the string for Paarl', function(){
        assert.equal(['CJ 678 543', 'CJ 67890'],  allPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864'));
    });
})
