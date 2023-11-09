function calcular_perimetro() {
    let a = prompt("Ingrese el valor del primer lado:");
    while (isNaN(a)) {
        a = prompt("El valor ingresado no es un numero. Ingrese el valor del primer lado:");
    }
    let b = prompt("Ingrese el valor del segundo lado:");
    while (isNaN(b)) {
        b = prompt("El valor ingresado no es un numero. Ingrese el valor del segundo lado:");
    }
    let perimetro = 2 * (parseInt(a) + parseInt(b));
    document.write("El perimetro del rectangulo es " + perimetro);
}

calcular_perimetro();