
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    document.getElementById("run").addEventListener("click",() => {
    
    let year = document.getElementById("year").value;//value pour recuperer ma valeur !!!
    let arr =[];

    //chercher sur l'annee le 13 de chaque mois
        for (mois = 1 ; mois <= 12; mois++) {
            let dateA = new Date(year, mois , 13);//i = paramètre de ma boucle
    //verifier si le 13 est un vendredi
            if (dateA.getDay() == 5) {
              arr.push(mois);
            }
        }

    //si c'est un vendredi les stockers dans une arr
    //afficher là ou c'est stocké
    //j'affiche comment ?(alert, log,...) 
    alert(arr);
    });
})();
