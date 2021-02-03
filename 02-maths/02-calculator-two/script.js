
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation

        let operandOne = parseInt(document.getElementById("op-one").value);
        let operandTwo = parseInt(document.getElementById("op-two").value);

        switch (operation) {
            case "addition":
                alert(operandOne + operandTwo);
                break;
            case "substraction":
                alert(operandOne - operandTwo);
                break;


            default:
                break;
        }

    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
