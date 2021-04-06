describe('The countAllFromTown function', function(){
    it('should return the total number of registration numbers in the string that is for Stellies', function(){
     assert.deepEqual(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
     
    });
    it('should return the  total number of registration numbers in the string that is for Bellville', function(){
        assert.deepEqual(1, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CY'));
    });

    it('should return the total number of registration numbers in the string that is for Paarl', function(){
        assert.deepEqual(1, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ'));
    });
})
   