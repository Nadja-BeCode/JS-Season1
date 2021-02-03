
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

    // your code here

   
        // perform the operation
        document.getElementById("red").onclick = changeColorBodyR;

        function changeColorBodyR() {
            document.body.style.backgroundColor = "red";
        }
        
        document.getElementById("green").onclick = changeColorBodyG;

        function changeColorBodyG() {
            document.body.style.backgroundColor = "green";
        }

        document.getElementById("yellow").onclick = changeColorBodyY;

        function changeColorBodyY() {
            document.body.style.backgroundColor = "yellow";
        }

        document.getElementById("blue").onclick = changeColorBodyB;

        function changeColorBodyB() {
            document.body.style.backgroundColor = "blue";
        }  

})();

