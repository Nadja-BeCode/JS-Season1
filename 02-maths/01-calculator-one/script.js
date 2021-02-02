
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let operandOne= (document.getElementById("operandOne").value);
        let operandTwo= (document.getElementById("operandTwo").value);
        alert("addition");

    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction

            let opOne = (document.getElementById("opOne")).value;
            let opTwo = (document.getElementById("opTwo")).value;
            document.getElementById("result").innerHTML = opOne - opTwo;
            alert("opOne - opTwo");
    
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
    });
})();
