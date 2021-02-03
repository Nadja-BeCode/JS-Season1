
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
   // let target = target.innerHTML(document.getElementById("Hello").value = "Good evening !");
    //console.log(target);
//****************************************************** */
    let target = document.getElementById("target");
     console.log(target);

    let date = new Date().getHours();
    console.log(date);

    if (date < 17) {
        target.innerHTML = "Hello";
    }
    else {
        target.innerHTML = "Good evening";
    }
})();
