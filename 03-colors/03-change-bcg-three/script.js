
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    // your code here

    function randomColor() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var randomColor = "rgb(" + x + "," + y + "," + z + ")";
        document.body.style.backgroundColor = randomColor;
        }
 run.addEventListener("click",randomColor);
 //randomColor();  // a l'ouverture de la fct la couleur change directement
})();
