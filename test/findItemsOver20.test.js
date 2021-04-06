describe('The findItemsOver20 function', function(){
it ('should return all the products that have a quantity greater than 20 (pears:37 and bananas:27)', function(){
    assert.deepEqual([{"name":"pears","qty":37},{"name":"bananas","qty":27}], findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]));
});
it ('should return all the products that have a quantity greater than 20 (apples:40, bananas:23 and apples:37)', function(){
    assert.deepEqual([{"name":"apples","qty":40},{"name":"bananas","qty":23},{"name":"apples","qty":37}], findItemsOver20([{"name":"apples","qty":40},{"name":"pears","qty":20},{"name":"bananas","qty":23},{"name":"apples","qty":37}]));

});
})


/*[{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]
[{"name":"apples","qty":10},{"name":"pears","qty":19},{"name":"bananas","qty":17},{"name":"apples","qty":3}]
[{"name":"apples","qty":40},{"name":"pears","qty":20},{"name":"bananas","qty":23},{"name":"apples","qty":37}]*/