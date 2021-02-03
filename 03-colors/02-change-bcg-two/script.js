
// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

(() => {

    // your code here

    document.getElementById("run").onclick = changeColorBody;
    let newColor = document.getElementById("color").value;

    function changeColorBody() {
        document.body.style.backgroundColor = newColor;
    }
    

})();
