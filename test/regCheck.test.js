describe('the regCheck function', function(){
    it('should return true if registration number includes location', function(){
    assert.equal(true, regCheck('DV 23 NB GP', 'GP'));
    })
    it('should return false if registration number does not include location', function(){
        assert.equal(false, regCheck('DV 23 NB GP'));
    })
})

