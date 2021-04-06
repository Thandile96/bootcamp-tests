function countAllFromTown(regNumber,town) {
  //console.log(regNumber)
  var newList = regNumber.split(",");
  var forTown = [];
  //loop through the new list and check for reg numbers
  for(var i = 0; i < newList.length; i++) {
    var reg = newList[i].trim();
   //condition loop
    if(reg.startsWith(town)) {
       forTown.push(reg)
    }
  }
  return forTown.length;
  //console.log(forTown.length)
}
