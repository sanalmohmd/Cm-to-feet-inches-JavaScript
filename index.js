var centimeter = document.querySelector(".cm-input");

var calculateButton = document.querySelector(".calculate");

var result1 = document.querySelector(".feet");
var result2 = document.querySelector(".inches")

var feet, inches, cm;



calculateButton.addEventListener("click", () => {

    cm = centimeter.value;



    feet = (0.328)*cm;

    inches = (0.392)*cm;

    result1.innerHTML =("feet :")+ feet ;

    result2.innerHTML =("inches :")+ inches;


});



