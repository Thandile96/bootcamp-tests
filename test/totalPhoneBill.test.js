describe('The totalPhoneBill function', function(){
    it('should calculate the total bill for the calls made', function(){
      assert.equal('R5.50', totalPhoneBill('call, call'));
    });

    it('should calculate the total bill for sms sent', function(){
      assert.equal('R1.95', totalPhoneBill('sms, sms, sms'));
    });

    it('should calculate the total bill for the data provided', function(){
      assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    
})