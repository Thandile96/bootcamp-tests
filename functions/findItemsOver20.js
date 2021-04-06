function findItemsOver20(itemList){

  var expensiveItems = [];
  
  for( var i=0; i<itemList.length; i++) {
    if(itemList[i].qty > 20) {
    expensiveItems.push(itemList[i]);
    } 
  }
  console.log(expensiveItems);
  return expensiveItems;
}