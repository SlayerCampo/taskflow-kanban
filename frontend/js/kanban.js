/* ============================================================
   kanban.js — Crear, mover, editar y borrar tareas
   Encargado: Dev Frontend 2
   No agregues aquí lógica de login: eso va en app.js

   MIENTRAS BACKEND NO ESTÉ LISTO: usa MOCK_TASKS de abajo.
   Cuando el equipo de Backend entregue /api/tasks, reemplaza
   getTasksMock() por un fetch() real — la función render()
   y el resto de la lógica no deberían necesitar cambios.
============================================================ */

// ---------- ZONA A: Datos falsos (MOCK) mientras no hay backend real ----------
let MOCK_TASKS = [
  { id: 1, titulo: "Diseñar logo", prioridad: "alta", estado: "por_hacer" },
  { id: 2, titulo: "Crear tabla de usuarios", prioridad: "media", estado: "por_hacer" },
  { id: 3, titulo: "Conectar login", prioridad: "alta", estado: "en_progreso" },
  { id: 4, titulo: "Estilos del header", prioridad: "baja", estado: "terminado" },
];

// ---------- ZONA B: Obtener tareas (cambiar por fetch real cuando exista el endpoint) ----------
function getTasksMock() {
  // TODO Backend: reemplazar por:
  // fetch('http://localhost:5000/api/tasks', { headers: { Authorization: `Bearer ${token}` } })
  return Promise.resolve(MOCK_TASKS);
}

// ---------- ZONA C: Renderizar tarjetas en sus columnas ----------
function renderTasks(tasks) {
  ["por_hacer", "en_progreso", "terminado"].forEach((estado) => {
    const contenedor = document.getElementById(`list-${estado}`);
    if (!contenedor) return;
    contenedor.innerHTML = "";
    tasks
      .filter((t) => t.estado === estado)
      .forEach((t) => {
        const card = document.createElement("div");
        card.className = `task-card priority-${t.prioridad}`;
        card.textContent = t.titulo;
        contenedor.appendChild(card);
      });
  });
}

// ---------- ZONA D: Crear / mover / eliminar (implementar aquí) ----------
function crearTarea(titulo, prioridad) {
  MOCK_TASKS.push({ id: Date.now(), titulo, prioridad, estado: "por_hacer" });
  renderTasks(MOCK_TASKS);
}

// ---------- ZONA E: Arranque ----------
document.addEventListener("DOMContentLoaded", () => {
  getTasksMock().then(renderTasks);
});
