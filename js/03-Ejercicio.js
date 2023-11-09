let sumas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 50; i++) { 
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1; 
  let suma = dado1 + dado2;
  sumas[suma - 2] = sumas[suma - 2] + 1;
}

for (let i = 0; i < sumas.length; i++) {
  document.write(`La suma ${i + 2} aparecio ${sumas[i]} veces.<br>`);
}
