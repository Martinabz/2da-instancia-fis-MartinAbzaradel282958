import { Actividad } from "../codigo/actividad.js";
import { Competencia } from "../codigo/competencia.js";
import { CompetenciaList } from "../codigo/competencialist.js";
import { Feedback } from "../codigo/feedback.js";

const competenciaList = new CompetenciaList();
const newCompetencia = new Competencia("Holaa");
newCompetencia.addArticulo("Se pudoo 1");
newCompetencia.addArticulo("Se pudoo 2");
newCompetencia.addArticulo("Se pudoo 3");
competenciaList.add(newCompetencia);

const competencia1 = new Competencia("Competencia 1");
competencia1.addArticulo("Artículo 1A");
competencia1.addArticulo("Artículo 1B");
competenciaList.add(competencia1);

const competencia2 = new Competencia("Competencia 2");
competencia2.addArticulo("Artículo 2A");
competencia2.addArticulo("Artículo 2B");
competenciaList.add(competencia2);

window.openFormActivity = openFormActivity;
window.updateArticulos = updateArticulos;
//window.openFormFeedback = openFormFeedback;

document.addEventListener("DOMContentLoaded", function () {
  // Obtener el elemento del select de competencias
  const competenciaSelect = document.getElementById("competencia-select");
  // Llenar el select con las opciones generadas por getCompetenciasOptions
  updateCompetenciasOptions();
});

// Función que se ejecuta cuando se hace clic en el botón "Agregar actividad"
function openFormActivity(button) {
  const CompetenciaSelect = document.getElementById("competencia-select");
  const articuloSelect = document.getElementById("articulo-select");
  const tipoSelect = document.getElementById("tipo-select");
  const descripcionTextArea = document.getElementById("descripcion");
  CompetenciaSelect.value = "noValido"; // Restablecemos la competencia al valor por defecto
  Array.from(articuloSelect.options).forEach(
    (option) => (option.selected = false),
  ); // Desmarcamos todos los artículos
  tipoSelect.value = "BaseActividad"; // Restablecemos el tipo de actividad
  updateArticulos(CompetenciaSelect);
  descripcionTextArea.value = ""; // Limpiamos el campo de descripción
  const cell = button.closest(".cell"); // Encontramos la celda donde se hizo clic
  const formSection = document.getElementById("activityFormSection");
  formSection.classList.add("show"); // Mostramos el formulario de actividad

  // Guardamos la celda seleccionada en el formulario usando un dato personalizado
  formSection.dataset.selectedCell = cell.dataset.cellId; // Asignamos el id de la celda seleccionada
}

// Función para cancelar la actividad y cerrar el formulario
document
  .getElementById("cancelActivity")
  .addEventListener("click", function () {
    const formSection = document.getElementById("activityFormSection");
    formSection.classList.remove("show"); // Ocultamos el formulario

    // Aseguramos que la tabla vuelva a ser visible si estaba oculta
    const tableContainer = document.getElementById("tableContainer");
    if (tableContainer) {
      tableContainer.style.display = "block"; // Volvemos a mostrar la tabla
    }
  });

// Función para guardar la actividad y actualizar la celda con la información ingresada
document.getElementById("saveActivity").addEventListener("click", function () {
  // Obtenemos los datos que el usuario seleccionó en el formulario
  const CompetenciaSelect = document.getElementById("competencia-select");
  const articuloSelect = document.getElementById("articulo-select");
  const tipoSelect = document.getElementById("tipo-select");
  const descripcionTextArea = document.getElementById("descripcion");
  if (CompetenciaSelect.value != "noValido") {
    const formSection = document.getElementById("activityFormSection");
    formSection.classList.remove("show"); // Ocultamos el formulario después de guardar

    const Competencia = CompetenciaSelect.value;
    const articulosSeleccionados = Array.from(
      articuloSelect.selectedOptions,
    ).map((option) => option.value);
    const tipoActividad = tipoSelect.value;
    const descripcion = descripcionTextArea.value;

    // Creamos un objeto que representa la actividad con todos los datos seleccionados
    const actividad = {
      Competencia,
      articulos: articulosSeleccionados,
      tipo: tipoActividad,
      descripcion: descripcion,
    };

    // Recuperamos el id de la celda que se seleccionó antes de abrir el formulario
    const selectedCellId = formSection.dataset.selectedCell;
    const cell = document.querySelector(`[data-cell-id="${selectedCellId}"]`);

    // Creamos el HTML que se va a mostrar en la celda con la información de la actividad
    const actividadInfoHTML = `
          <div class="activity-info">
              <strong>Competencia:</strong> ${Competencia} <br>
              <strong>Artículos:</strong> ${articulosSeleccionados.join(", ")} <br>
              <strong>Tipo de Actividad:</strong> ${tipoActividad} <br>
              <strong>Descripción:</strong> ${descripcion} <br>
              <button class="edit-btn" onclick="openFormActivity(this)">Editar actividad</button>
          </div>
      `;

    // Reemplazamos el contenido de la celda seleccionada con la nueva actividad guardada
    cell.innerHTML = actividadInfoHTML;

    // Aseguramos que la tabla vuelva a ser visible si fue oculta durante la edición
    const tableContainer = document.getElementById("tableContainer");
    // Verificamos si el elemento tableContainer existe antes de intentar cambiar su estilo
    if (tableContainer) {
      tableContainer.style.display = "block"; // Solo si el elemento existe
    }
  } else {
    console.error("Debe seleccionar una competencia");
  }
});
function updateCompetenciasOptions() {
  const selects = document.getElementsByClassName("competencia-options"); // Variable donde almacenaremos las opciones del select
  // Iteramos sobre los selectopres de Competencias disponibles y le agregamos las competencias
  for (let select of selects) {
    //limpiar los select
    select.innerHTML = "";

    //Agregar la opcion base
    const base_option = document.createElement("option");
    base_option.value = "noValido";
    base_option.textContent = "-- Selecciona una competencia --";
    //`<option value="noValido">-- Selecciona una competencia --</option>`;
    select.appendChild(base_option);
    //Agrego las competencias validas
    competenciaList.getCompetencias().forEach((Competencia) => {
      const option = document.createElement("option");
      option.value = Competencia.getNombre();
      option.textContent = Competencia.getNombre();
      select.appendChild(option);
    });
  }
}

//Funcion que actualiza los articulos segun la competencia seleccionada
function updateArticulos(select) {
  const selectedCompetencia = select.value; // Obtener la Competencia seleccionada
  const articulosContainer = document.querySelector(".select-articulo");
  const articulosSelect = document.getElementById("articulo-select");
  if (selectedCompetencia != "noValido") {
    if (selectedCompetencia) {
      const competencia = competenciaList
        .getCompetencias()
        .find((competencia) => competencia.getNombre() === selectedCompetencia);

      if (competencia) {
        // Llenar el select de artículos
        articulosSelect.innerHTML = competencia.unArticulo
          .map((articulo) => `<option value="${articulo}">${articulo}</option>`)
          .join("");
        articulosContainer.style.display = "block"; // Mostrar la sección de artículos
      }
    } else {
      // Ocultar la sección de artículos si no hay competencia seleccionada
      articulosContainer.style.display = "none";
    }
  } else {
    // Ocultar la sección de artículos si no hay competencia seleccionada
    articulosContainer.style.display = "none";
  }
}
document
  .getElementById("saveArticuloButton")
  .addEventListener("click", function () {
    const compAdondeAgregarArticulo = competenciaList.getCompetenciaPorNombre(
      document.getElementById("competencia-select2").value,
    );
    const paraLimpiar = document.getElementById("articulo-add");
    const articuloAAgregar = document.getElementById("articulo-add").value;
    compAdondeAgregarArticulo.addArticulo(articuloAAgregar);
    document.getElementById("competencia-select2").value = "noValido";
    paraLimpiar.value = "";
    console.log(`Articulo añadida correctamente!`);
  });

// Mostrar el formulario de agregar competencia
document
  .getElementById("addCompetenciaButton")
  .addEventListener("click", function () {
    const formSection = document.getElementById("competenciaFormSection");
    formSection.classList.add("show"); // Mostramos el formulario

    // Opcional: vaciar campos del formulario antes de mostrarlo
    document.getElementById("competencia-titulo").value = "";
    document.getElementById("competencia-articulos").value = "";
  });

// Función para guardar una nueva competencia
document
  .getElementById("saveCompetenciaButton")
  .addEventListener("click", function () {
    const tituloCompParaLimpiar = document.getElementById("competencia-titulo");
    const articulosInputParaLimpiar = document.getElementById(
      "competencia-articulos",
    );
    const tituloComp = document.getElementById("competencia-titulo").value;
    const articulosInput = document.getElementById(
      "competencia-articulos",
    ).value;
    const articulosArray = articulosInput
      .split(",")
      .map((articulo) => articulo.trim());

    // Crear una nueva competencia
    const nuevaCompetencia = new Competencia(tituloComp);
    articulosArray.forEach((articulo) =>
      nuevaCompetencia.addArticulo(articulo),
    );

    try {
      competenciaList.add(nuevaCompetencia); // Agregar a la lista de competencias
      console.log(`Competencia "${tituloComp}" añadida correctamente!`);
    } catch (error) {
      console.error(error.message);
    }
    tituloCompParaLimpiar.value = "";
    articulosInputParaLimpiar.value = "";
    // Cerrar formulario
    const formSection = document.getElementById("competenciaFormSection");
    formSection.classList.remove("show"); // Ocultamos el formulario
  });

// Función para cancelar el formulario y ocultarlo
document
  .getElementById("cancelCompetenciaButton")
  .addEventListener("click", function () {
    const formSection = document.getElementById("competenciaFormSection");
    formSection.classList.remove("show"); // Ocultamos el formulario
  });

// Mostrar el formulario de agregar articulo
document
  .getElementById("addArticuloButton")
  .addEventListener("click", function () {
    const formSection = document.getElementById("articuloFormSection");
    formSection.classList.add("show"); // Mostramos el formulario
    updateCompetenciasOptions();
    // Opcional: vaciar campos del formulario antes de mostrarlo
    document.getElementById("articulo-add").value = "";
  });

// Función para cancelar el formulario y ocultarlo
document
  .getElementById("cancelArticuloButton")
  .addEventListener("click", function () {
    const formSection = document.getElementById("articuloFormSection");
    formSection.classList.remove("show"); // Ocultamos el formulario
  });

// Mostrar el formulario de agregar feedback
document
  .getElementById("addFeedbackButton")
  .addEventListener("click", function () {
    const formSection = document.getElementById("feedbackFormSection");
    formSection.classList.add("show"); // Mostramos el formulario

    // Opcional: vaciar campos del formulario antes de mostrarlo
    document.getElementById("devolucion-texto").value = "";
  });

// Función para guardar un nuevo feedback
document
  .getElementById("saveFeedbackButton")
  .addEventListener("click", function () {
    const textoParaLimpiar = document.getElementById("devolucion-texto");
    const devText = document.getElementById("devolucion-texto").value;
    const nuevoFeedback = new Feedback(devText);
    textoParaLimpiar.value = "";
    // Cerrar formulario
    const formSection = document.getElementById("feedbackFormSection");
    formSection.classList.remove("show"); // Ocultamos el formulario
  });

// Función para cancelar el formulario y ocultarlo
document
  .getElementById("cancelFeedbackButton")
  .addEventListener("click", function () {
    const formSection = document.getElementById("feedbackFormSection");
    formSection.classList.remove("show"); // Ocultamos el formulario
  });
