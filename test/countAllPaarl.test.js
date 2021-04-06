describe('The countAllPaarl function', function(){
    it('should return two registration numbers in the string for Paarl', function(){
        assert.deepEqual(['CJ 678 543', 'CJ 67890'],  allPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864'));
    });

    it('should return one registration number in the string for Paarl', function(){
        assert.deepEqual(['CJ 678 543'],  allPaarl('CL 900, CJ 678 543, CA 34567, CN 7864'));
    });
})
