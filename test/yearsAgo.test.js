describe('The yearsAgo function', function(){
   it ('should return how many years ago 1996 is from the current year', function(){
       assert.equal(25, yearsAgo(1996));
   });
   it ('should return how many years ago that 2010 is from the current year', function(){
    assert.equal(11, yearsAgo(2010));
   });
})