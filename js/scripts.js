//Arrays
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Afua","Afua","Ama"];

//functions

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
            document.getElementById("result") = "Sunday" + MaleNames[0];
            console log
        }else if (day == 1){
            document.getElementById("result")= "Monday" + maleNames[1];
        }else if (day == 2){
            document.getElementById("result")= "Tuesday" + maleNames[2];
        }else if (day == 3){
            document.getElementById("result") = "Wednesday" + maleNames[3];
        }else if (day == 4){
            document.getElementById("result")= "Thursday" + maleNames[4];
        }else if (day == 5){
            document.getElementById("result")= "Friday" + maleNames[5];
        }else {
            document.getElementById("result") = "Saturday" + maleNames[6];
    }

    case "female":
            if(dayOfTheWeek == 0){
                document.getElementById("result")= "Sunday" + femaleNames[0];
                console log("Your akan name is  akosua"")
            }else if (day == 1){
                document.getElementById("result") = "Monday" + femaleNames[1];
                console log ("Your akan name is adwoa ")
            }else if (day == 2){
                document.getElementById("result") = "Tuesday" + femaleNames[2];
                console log("Your akan name is abenaa")
            }else if (day == 3){
                document.getElementById("result")= "Wednesday" + femaleNames[3];
                console log ("Your akan name is akua")
            }else if (day == 4){
                document.getElementById("result") = "Thursday" + femaleNames[4];
                console log ("Your akan name is yaa")
            }else if (day == 5){
                document.getElementById("result")= "Friday" + femaleNames[5];
                console log("Your akan name is afua")
            }else{
                document.getElementById("result")= "Saturday" + femaleNames[6];
                console log("Your akan name is ama") 
            }
     console.log(#result);
