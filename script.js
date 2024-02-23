// Obtiene la referencia al elemento con el id "pantalla" en el documento
const pantalla = document.querySelector("#pantalla");

// Obtiene una lista de todos los elementos con la clase "btn" en el documento
const botones = document.querySelectorAll(".btn");

// Itera sobre cada botón en la lista
botones.forEach((boton) => {
  // Agrega un evento de clic a cada botón
  boton.addEventListener("click", () => {
    // Obtiene el texto contenido en el botón presionado
    const botonApretado = boton.textContent;

    // Lógica para el botón "c" (limpiar pantalla)
    if (boton.id === "c") {
      pantalla.textContent = "0";
      return;
    }

    // Lógica para el botón "borrar" (eliminar último carácter en pantalla)
    if (boton.id === "borrar") {
      // Verifica si la pantalla tiene un solo carácter o muestra "Syntax Error"
      if (
        pantalla.textContent.length === 1 ||
        pantalla.textContent === "Syntax Error"
      ) {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }

    // Lógica para el botón "igual" (realiza la operación y muestra el resultado)
    if (boton.id === "igual") {
      try {
        // Evalúa la expresión matemática en la pantalla y actualiza el contenido
        pantalla.textContent = eval(pantalla.textContent);
      } catch {
        // Maneja errores de sintaxis mostrando "Syntax Error" en la pantalla
        pantalla.textContent = "Syntax Error";
      }
      return;
    }

    // Lógica para los demás botones (números y operadores)
    if (
      pantalla.textContent === "0" ||
      pantalla.textContent === "Syntax Error"
    ) {
      // Si la pantalla muestra "0" o "Syntax Error", reemplaza con el nuevo botón
      pantalla.textContent = botonApretado;
    } else {
      // Agrega el texto del botón a la pantalla existente
      pantalla.textContent += botonApretado;
    }
  });
});
