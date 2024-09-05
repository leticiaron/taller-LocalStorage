document.addEventListener("DOMContentLoaded", () => {
  let inputText = document.getElementById("inputText");
  let buttonText = document.getElementById("buttonText");

  // Evento click
  buttonText.addEventListener("click", () => {
    let textValue = inputText.value;

    if (textValue) {
      // Guardar el valor en localStorage
      localStorage.setItem("savedData", textValue);

      // Limpiar campo de texto después de guardar
      inputText.value = "";
    } else {
      console.log("El campo de texto está vacío.");
    }
  });
});
