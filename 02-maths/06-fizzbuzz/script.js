
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    // your code here

    /*let i = new Number(0)
    for (i = 0; i <=100 ; i++) {
        if (i%3 ==0) {
            alert ("fizz");
        }
        else if (i%5 == 0){
            alert ("buzz");
        } 
        else if (i%3==0) && (i%5==0){
            alert ("fizzbuzz");
        }
    }
    console.log(i)*/

    let i = new Number(1)

for (i=1; i<=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      alert("fizz");
    } else if (i % 3 === 0) {
      alert("fizzbuzz");
    } else if (i % 5 === 0) {
      alert("buzz");
    }  
}

console.log(i);
})();
