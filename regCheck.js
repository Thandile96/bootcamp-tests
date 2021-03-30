function regCheck(regNumber, location) {
  console.log(location)
  if(regNumber.includes(location)) {
    return true;
  }
  else {
    return false;
  }
}
