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
}
