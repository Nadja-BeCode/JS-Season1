// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here

document.getElementById("data-hover").onmouseover = function() {mouseOver()};
//document.getElementById("data-hover").onmouseout = function() {mouseOut()};*/

function mouseOver() {
  document.getElementById("data-hover").src = "../../_shared/img/kiss-wink-heart.svg";
}

/*function mouseOut() {
  document.getElementById("data-hover").innerHTML= "black";
}*/

})();
