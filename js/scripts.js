// Array for my name
var maleAkanNames= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleAkanNames=["Akosua","Adwoa ","Abenaa", "Akua ","Yaa","Afua","Ama"];
// Array for days of the week
var daysOfTheWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// Validate date
function dayValidator() {
if (day<=0 || day>=32) {
  return false;
}else {
  return true
  }
}
//Validate monthOfBirth
function monthValidator () {
  if (monthOfBirth < 1 || monthOfBirth > 12) {
    return false;
  } else {
    return true;
  }
}
  //validation variables
  let monthValid = monthValidator();
  let dayValid = dayValidator();
