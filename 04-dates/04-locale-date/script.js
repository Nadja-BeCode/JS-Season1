
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

   /* let target = document.getElementById("target");
    console.log(target);

    let date = new Date();
    console.log(date);

    target.innerHTML = date.toLocaleTimeString("en-US")*/


let date = new Date()/*.toLocaleDateString("en-US").split("/")*/;
date.setDate(4);
document.getElementById("target").innerHTML = date;


})();
