// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        
        let i = 1;
        let array = [];
        
        while (i <= 10) { // boucle à une seule condition pour le while
            array.push(Math.floor(Math.random() * 100) +1);// calculer afficher jusqu'à 100
            i++;//pour qu'il rajoute jusqu'à 10
            console.log(array);
        }

        let j = 1;

        while (j <= 10) {
            document.getElementById(`n-${j}`).innerHTML = array[j-1]; // POURQUOI - 1 et + 1 ??????????
            j++;
            console.log(array[j-1]);
        }
    });

})();








/*let min = Math.min.apply(null, arr)
let max = Math.max.apply(null, arr)

console.log(arr)
console.log("Min : " + min)
console.log("Max : " + max)*/