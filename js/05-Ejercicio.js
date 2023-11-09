function informacion_cadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return "La cadena esta formada solo por mayusculas.";
    } else if (cadena === cadena.toLowerCase()) {
        return "La cadena esta formada solo por minusculas.";
    } else {
        return "La cadena esta formada por una mezcla de mayusculas y minusculas.";
    }
}

var cadena = prompt("Ingrese una cadena de texto:");
var resultado = informacion_cadena(cadena);
document.write(resultado);
