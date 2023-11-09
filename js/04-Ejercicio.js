function parImpar() {
    let numero = prompt("Ingrese un numero entero:");
    while (isNaN(numero)) {
        numero = prompt("El valor ingresado no es un numero. Ingrese un numero entero:");
    }
    if (numero % 2 == 0) {
        return "El numero "+numero+ " es par.";
    } else {
        return "El numero "+numero+ "  es impar.";
    }
}

let resultado = parImpar();
document.write(resultado);
