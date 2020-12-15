//Arrays
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Afua","Afua","Ama"];
var dayOfTheWeek =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var day = function(){
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);
}

function calculate(){
    day();
    dayOfTheWeek = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
    return(Math.floor(dayOfTheWeek));
    console.log(dayOfTheWeek);
}

if (Month < 1 || Month> 12) {
    alert("Incorrect month.")
    return;
}

if (Date< 0 ||Date >31 ){
  alert( "Incorrect date.")
  return;
}

var result = function(){
dayOfTheWeek = calculate();
checkgender();
}

var checkgender = function() {
    calculate();
    var Gender = document.getElementsByName;
    if(gender[0].checked == true){
        gender = "male";
    }else if(gender[1].checked == true ){
        gender = "female";
    }

    switch(gender){
        case "male":
          if(dayOfTheWeek == 0){
            document.getElementById("result").innerHTML = "Sunday" + MaleNames[0];
            console log ("Your akan name is Kwasi")
           }else if (dayOfTheWeek == 1){
            document.getElementById("result").innerHTML = "Monday" + maleNames[1];
            console log ("Your akan name is Kwadwo")
           }else if (dayOfTheWeek == 2){
            document.getElementById("result").innerHTML = "Tuesday" + maleNames[2];
            console log ("Your akan name is Kwabena")
           }else if (dayOfTheWeek == 3){
            document.getElementById("result").innerHTML = "Wednesday" + maleNames[3];
            console log ("Your akan name is Kwaku")
           }else if (dayOfTheWeek == 4){
            document.getElementById("result").innerHTML = "Thursday" + maleNames[4];
            console log ("Your akan name is Yaw")
           }else if (dayOfTheWeek == 5){
            document.getElementById("result").innerHTML  = "Friday" + maleNames[5];
            console log ("Your akan name is Kofi")
           }else {
            document.getElementById("result").innerHTML = 'Saturday' + maleNames[6];
            console log ("Your akan name is Kwame ")
           }
		   break;
        case "female":
            if(dayOfTheWeek == 0){
                document.getElementById("result").innerHTML = "Sunday" + femaleNames[0];
                console.log("Your akan name is  akosua")
            }else if (dayOfTheWeek == 1){
                document.getElementById("result").innerHTML = "Monday" + femaleNames[1];
                console.log ("Your akan name is adwoa ")
            }else if (dayOfTheWeek == 2){
                document.getElementById("result").innerHTML = "Tuesday" + femaleNames[2];
                console.log("Your akan name is abenaa")
            }else if (dayOfTheWeek == 3){
                document.getElementById("result").innerHTML = "Wednesday" + femaleNames[3];
                console.log ("Your akan name is akua")
            }else if (dayOfTheWeek == 4){
                document.getElementById("result").innerHTML = "Thursday" + femaleNames[4];
                console.log ("Your akan name is yaa")
            }else if (dayOfTheWeek == 5){
                document.getElementById("result").innerHTML = "Friday" + femaleNames[5];
                console.log("Your akan name is afua")
            }else{
                document.getElementById("result").innerHTML = "Saturday" + femaleNames[6];
                console.log("Your akan name is ama")
            }
			break;
        default:
         console.log(result);
	}
}
