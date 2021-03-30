describe('The isFromBellville', function(){
  it('should return true if registration number starts with CY', function(){
    assert.equal(true, isFromBellville('CY'));
  })
  it('should return false if registration number starts with CJ', function(){
    assert.equal(false, isFromBellville('CJ'));
  })
})