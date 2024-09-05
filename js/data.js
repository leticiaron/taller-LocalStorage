document.addEventListener("DOMContentLoaded", () => {
  let dataSpan = document.getElementById("data");

  // Obtener el valor guardado en localStorage
  let savedData = localStorage.getItem("savedData");

  if (savedData) {
    // Mostrar el valor en el span
    dataSpan.textContent = savedData;
  } else {
    dataSpan.textContent = "No hay datos guardados.";
  }
});
