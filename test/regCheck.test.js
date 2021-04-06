describe('the regCheck function', function(){
    it('should return true if registration number for GP includes location', function(){
    assert.equal(true, regCheck('DV 23 NB GP', 'GP'));
    });


  /*  it('should return true if registration number for MP includes location', function(){
        assert.equal(true, regCheck('DV 23 LP GP', 'MP'));
        }); */

    it('should return false if registration number does not include location', function(){
        assert.equal(false, regCheck('DV 23 NB GP'));
    });


})

