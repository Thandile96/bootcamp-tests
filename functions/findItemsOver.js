function findItemsOver(list, threshold){
    var higherQtyProducts = [];
      for( var i=0; i<list.length; i++) {
      if(list[i].qty > threshold) {
       higherQtyProducts.push(list[i]);
      }
      }
      return higherQtyProducts;
    }