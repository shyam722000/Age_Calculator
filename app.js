function calculateAge() {
    var birthdate = document.getElementById('birthdate').value;
    var today = new Date();
    var birthdateObj = new Date(birthdate);
    var age = today.getFullYear() - birthdateObj.getFullYear();
    var monthDiff = today.getMonth() - birthdateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateObj.getDate())) {
      age--;
    }
    var result = document.getElementById('result');
    result.innerHTML = "Your age is: " + age;
  }

//   1 .It starts by obtaining the value entered in the input field with the id "birthdate" using the getElementById() method and assigns it to the variable birthdate.

//   2. A new Date object is created using the current date, assigned to the variable today.
  
//  3.  Another Date object is created using the birthdate value, assigned to the variable birthdateObj.
  
//  4. The age is calculated by subtracting the birth year from the current year: today.getFullYear() - birthdateObj.getFullYear(). This value is stored in the variable age.
  
//   5.Next, the code checks for any remaining months between the current month and the birth month: today.getMonth() - birthdateObj.getMonth(). If the difference is negative or if the birth date day is greater than the current day, it means the birthdate has not been reached yet in the current year. In such cases, the age is reduced by 1.
  
//  6.  Finally, the calculated age is displayed on the webpage by setting the innerHTML property of the element with the id "result" to a string that includes the age value.