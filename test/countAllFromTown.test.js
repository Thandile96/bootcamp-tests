describe('The allFromTown function', function(){
    it('should return all the registration numbers in the string that is for that town(Stellies)', function(){
     assert.equal('Stellies', allFromTown('CL 124', 'CL 345', 'CL 341', 'CL'));
     
    });
})

// 'CL 124,CY 567,CL 345, CJ 456,CL 341, CL 124,CY 567,CL 345, CJ 456,CL 341, CL 124,CY 567,CL 345, CJ 456,CL 341'