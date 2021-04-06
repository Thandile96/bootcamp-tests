function allFromTown(regNumber,town){
 console.log(regNumber);
  var regList = regNumber.split(",");
   var forTown = [];
  for(var i = 0; i < regList.length; i++) {
    var reg = regList[i].trim();
    if(reg.startsWith(town)){
       forTown.push(reg)
       }
  }
  return forTown;
}
