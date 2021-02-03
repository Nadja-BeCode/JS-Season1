
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    
    let target = document.getElementById("target");
    console.log(target);

    let date = new Date().getHours();
    console.log(date);

    if (date < 18) {
        target.innerHTML = "Hello";
    }
    else {
        target.innerHTML = "Good evening";
    }



})();

//recup the target
//init la date
//mettre les condit.