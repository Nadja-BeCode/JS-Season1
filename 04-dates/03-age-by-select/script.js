
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here

    document.getElementById("run").addEventListener("click",()) 

    let currentDate = new Date();
    let birthDay =
    let birthYear =
    let birthMonth =

})();


document.getElementById("run").addEventListener("click", () => {
    let dayBirth = document.getElementById("dob-day").value;
    let monthBirth = document.getElementById("dob-month").value;
    let yearBirth = document.getElementById("dob-year").value;

    let currentDate = new Date();

    let age = currentDate.getFullYear() - yearBirth;
    // si le mois sélectionné est après le mois en cours, age-1
    if (monthBirth > currentDate.getMonth() + 1) {
        age = age - 1;
        // si le mois sélectionné est avant le mois en cours, age de l'année
    } else if (monthBirth < currentDate.getMonth() + 1) {
        age = age;
        // si le mois sélectionné est le mois en cours
    } else if (monthBirth == currentDate.getMonth() + 1) {
        // si le jour sélectionné est avant la date en cours, age de l'année
        if (dayBirth <= currentDate.getDate()) {
            age = age;
            //sinon age-1
        } else {
            age = age - 1;
        }
    }

    alert("Vous êtes né(e) le " + dayBirth + "/" + monthBirth + "/" + yearBirth + ". Vous avez donc " + age + " ans.")
});
[15:17]
--------------------------------------
[15:18]
(() => {

document.getElementById("run").addEventListener("click", () => {
    let currentDate = new Date();
    let dayBirth = document.getElementById("dob-day").value;
    let monthBirth = document.getElementById("dob-month").value;
    let yearBirth = document.getElementById("dob-year").value;

    let age = currentDate.getFullYear() - yearBirth;

    if (monthBirth > currentDate.getMonth() + 1) {
        age = age - 1;
    }
    else if (monthBirth < currentDate.getMonth() + 1) {
        age = age;
    }
    else if (monthBirth == currentDate.getMonth() + 1) {
        if (dayBirth <= currentDate.getDate()) {
            age = age;
        }
        else {
            age = age - 1;
        }
    }

    alert("Your birthday is : " + dayBirth + "/" + monthBirth + "/" + yearBirth + ". You are " + age + " years old.")

});

})();

