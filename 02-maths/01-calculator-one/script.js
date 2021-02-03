
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let operandOne= parseInt(document.getElementById("op-one").value);
        let operandTwo= parseInt(document.getElementById("op-two").value);
        alert(operandOne + operandTwo);

    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let operandOne= parseInt(document.getElementById("op-one").value);
        let operandTwo= parseInt(document.getElementById("op-two").value);
        alert(operandOne - operandTwo);
    
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let operandOne= parseInt(document.getElementById("op-one").value);
        let operandTwo= parseInt(document.getElementById("op-two").value);
        alert(operandOne * operandTwo);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let operandOne= parseInt(document.getElementById("op-one").value);
        let operandTwo= parseInt(document.getElementById("op-two").value);
        alert(operandOne / operandTwo);
    });
})();
