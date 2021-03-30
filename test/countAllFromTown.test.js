describe('The allFromTown function', function(){
    it('should return all the registration numbers in the string that is for that town', function(){
     assert.equal([], allFromTown('CL 124', 'CY 567', 'CL 345', 'CJ 456', 'CL 341'));
     
    });

})
    /* it('should return all the registration numbers in the string that is for Stellies', function(){
        assert.equal('fromStellies', allFromTown( ['CL 124', 'CL 345', 'CL 341']));
     });*/
     


// 'CL 124,CY 567,CL 345, CJ 456,CL 341, CL 124,CY 567,CL 345, CJ 456,CL 341, CL 124,CY 567,CL 345, CJ 456,CL 341'