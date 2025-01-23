"use strict";
function calcular(operacion) {
    const num1Input = document.getElementById("numero1");
    const num2Input = document.getElementById("numero2");
    const resultadoDiv = document.getElementById("resultado");
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (isNaN(num1) || isNaN(num2)) {
        resultadoDiv.innerHTML = "Por favor, ingresa números válidos.";
        return;
    }
    let resultado;
    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            if (num2 === 0) {
                resultadoDiv.innerHTML = "Error: No se puede dividir por 0.";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            resultadoDiv.innerHTML = "Operación no válida.";
            return;
    }
    resultadoDiv.innerHTML = `Resultado: ${resultado}`;
}
