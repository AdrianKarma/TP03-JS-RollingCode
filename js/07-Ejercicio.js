const tablaDeMultiplicar = (numero) => {
  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    let producto = numero;
    producto = producto * i;
    resultado += `${numero} x ${i} = ${producto}</br>`;
  }
  return resultado;
};

let numero;
do {
  numero = prompt("Ingrese un numero");
  numero = parseInt(numero);
  if (isNaN(numero)) {
    alert("Eso no es un numero valido. Por favor, intente de nuevo.");
  }
} while (isNaN(numero));
document.write(tablaDeMultiplicar(numero));
