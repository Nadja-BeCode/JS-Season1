// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here

    document.getElementById("run").addEventListener("click", () => {

        
        /*let element = fruits.includes("appel"[fruits]);
        if(element == "apple") {
            console.log("yes");
        } else {
            console.log("no");
        }
        //console.log(element);*/


        /*if (fruits.indexOf("apple") === -1) {
            console.log(fruits.includes(1));
           }
           else {
            console.log("no");
           }*/


        let element = [fruits.length];
           if (fruits == "appel")
        alert(element.includes("apple"));
        });

})();
