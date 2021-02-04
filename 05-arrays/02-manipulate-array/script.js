// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here

    document.getElementById("run").addEventListener("click", () => {
        //console.log(fruits);
   
        let firstElement = fruits.shift();
        let lastFruits = fruits.pop();
        let bFruits = fruits.unshift('banana');//add first place
        let kFruits = fruits.push('kiwi');//add last place

        alert(fruits);
    })



})();
