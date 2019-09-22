/* Akan name function */
function namefinder() {
  /* Reads the inputs from the gender radio input  */
  var gender = document.getElementById("gendervalue").value;
  /* Reads the inputs from the date input field */
  var birthdate = document.getElementById("dob").value;
  /* Assigns the value of date read from the date of birth input field */
  var dateofbirth = new Date(birthdate);
  var weekday;
  /* Date validation */
  if (!!dateofbirth.valueOf()) {
    /* Calculating the day of the week born: 0-6 i.e Sunday to Saturday */
    weekday = dateofbirth.getDay();
  } else {
    alert("Invalid date");
  }
  /* Akan male names list */
  var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  /* Akan female names list */
  var female = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  /* Akan female names list */
  if (document.getElementById("female").checked) {
    /* Assigning the gender value female */
    gender = document.getElementById("female").value;
    /* Assigning the name based on day of the week born  */
    document.getElementById("output").innerHTML = female[weekday];
  }
  /* Akan female names list */
  if (document.getElementById("male").checked) {
    /* Assigning the gender value male */
    gender = document.getElementById("male").value;
    /* Assigning the name based on day of the week born  */
    document.getElementById("output").innerHTML = male[weekday];
  }
  /* Checkbox input validation */
  if (
    document.getElementById("male").checked == false &&
    document.getElementById("female").checked == false
  ) {
    alert("Kindly choose your gender");
    return false;
  }
}
