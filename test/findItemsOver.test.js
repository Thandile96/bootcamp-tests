describe('The findItemsOver function', function(){
   // it ('should return all the products that have a quantity higher than the threshold(20)', function(){
        //assert.deepEqual([{"name":"pears","qty":37},{"name":"bananas","qty":27}], findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]));
   // });

    it ('should return all the products that have a quantity higher than the threshold(25)', function(){ 
        assert.deepEqual([{"name":"pears","qty":37},{"name":"bananas","qty":27}],
        
        findItemsOver([{"name":"apples","qty":10},
                        {"name":"pears","qty":37},
                        {"name":"bananas","qty":27},
                        {"name":"apples","qty":3}], 25))
});

it ('should return all the products that have a quantity higher than the threshold (10)', function(){
    assert.deepEqual([{"name":"pears","qty":19},{"name":"bananas","qty":17}], 

    findItemsOver([{"name":"apples","qty":10},
                   {"name":"pears","qty":19},
                   {"name":"bananas","qty":17},
                   {"name":"apples","qty":3}], 10))
});

it ('should return all the products that have a quantity higher than the threshold (30)', function(){
    assert.deepEqual([{"name":"apples","qty":40},{"name":"apples","qty":37}], 

    findItemsOver([{"name":"apples","qty":40},
                    {"name":"pears","qty":20},
                    {"name":"bananas","qty":23},
                    {"name":"apples","qty":37}],30))
});

});