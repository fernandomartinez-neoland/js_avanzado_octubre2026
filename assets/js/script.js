// const numero = 5667;
// const caracteres = "texto que ustedes quieran";
// const booleano = true;
// const arreglo = ["texto", 123312, false, [""], {}];
// const objeto = {
//   foma: "circular",
//   color: "dorado",
//   numero,
//   arreglo,
//   booleano
// };

// console.log(objeto);
// console.log(arreglo);

// variables
const lista = ["pepito", "fulanito", "sutano", "mengano"];

// variables de etiquetas
const nombre = document.getElementById("nombre");
const numero = document.getElementById("contador");
const btn_contador = document.getElementById("contar");

btn_contador.addEventListener("click", () => {
  let contador = parseInt(numero.textContent);
  nombre.textContent = lista[contador];
  if (contador > 3) {
    contador = 0;
  } else {
    contador++;
  }
  numero.textContent = contador;

  switch (nombre.textContent) {
    case "pepito":
      console.log("es el hijo de pepa");
      break;
    case "fulanito":
      console.log("es el hijo de una fulana");
      break;
    case "sutano":
      console.log("es el hijo de sutana");
      break;

    case "mengano":
      console.log("es el hijo de un mango");
      break;
    default:
      console.log("es huerfano");
  }
});
