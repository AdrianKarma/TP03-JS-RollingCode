let ciudades = [];
let ciudad;

while (ciudad = prompt("Ingresa el nombre de una ciudad")) {
  ciudades.push(ciudad);
}

alert(`El array generado es: ${ciudades}`);

document.write(`<p>La longitud del array es: ${ciudades.length}</p>`); // primer
document.write(`<p>Los items de las posiciones primera, tercera y ultima son: ${ciudades[0]}, ${ciudades[2]}, ${ciudades[ciudades.length - 1]}</p>`); //segundo

ciudades.push("Paris"); //tercer

document.write(`<p>El elemento que ocupa la segunda posicion es: ${ciudades[1]}</p>`); //cuarto

ciudades[1] = "Barcelona"; //sobreescribo 

document.write(`<p>El array actualizado es: ${ciudades}</p>`); //quinto
j