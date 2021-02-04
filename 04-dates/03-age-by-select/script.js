
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here

    document.getElementById("run").addEventListener("click",()) 

    let birthDay = document.getElementById("dob-day").value;
    let birthYear = document.getElementById("dob-year").value;
    let birthMonth = document.getElementById("dob-month").value;

    let currentDate = new Date();

    let age = currentDate.getFullYear() - birthYear;
//*************************GET MONTH******************** */
    if (currentDate >= birthMonth) {
    }
    else {
        birthYear --;
    }
//************************GET DAY*********************** */
    if (currentDate >= birthDay) {
    }
    else {
        birthMonth--;
    }
    alert(age);
})();


