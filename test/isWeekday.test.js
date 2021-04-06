describe('The isWeekday function', function(){
    it('should return true if day starts with M or T or W or F', function(){
     assert.equal(true, isWeekday('Monday'));
     assert.equal(true, isWeekday('Tuesday'));

    });
    
    it('should return false if day does not start with M or T or W or F', function(){
    assert.equal(false, isWeekday('Saturday'));
    assert.equal(false, isWeekday('Sunday'));
    });

})