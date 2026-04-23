let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let operacion = prompt("Elige la operación (+, -, *, /):");
let resultado;

// Modifico el texto del html por su id
const texto = document.getElementById('result');

// Evalúa la operación ingresada
if (operacion === "+") {
    resultado = num1 + num2
    alert("El resultado es: " + resultado);
    texto.textContent = num1 + " + " + num2 + " = " + resultado;
}
else if (operacion === "-") {
    resultado = num1 - num2
    alert("El resultado es: " + resultado);
    texto.textContent = num1 + " - " + num2 + " = " + resultado;
}
else if (operacion === "*") {
    resultado = num1 * num2
    alert("El resultado es: " + resultado);
    texto.textContent = num1 + " * " + num2 + " = " + resultado;
}
else if (operacion === "/") {
    if (num2 !== 0) {
        resultado = num1 / num2
        alert("El resultado es: " + resultado);
        texto.textContent = num1 + " / " + num2 + " = " + resultado;
    }
    else {
        alert("No se puede dividir por cero.");
        texto.textContent = "No se puede dividir por cero.";
    }
}
else {
    alert("Operación no válida.");
    texto.textContent = "Operación no valida.";
}