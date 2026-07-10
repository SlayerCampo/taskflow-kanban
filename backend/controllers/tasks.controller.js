/* ============================================================
   tasks.controller.js — Lógica para crear, mover y borrar tareas
   Encargado: Dev Backend 2
============================================================ */

const db = require("../config/db");

// ---------- ZONA A: Listar tareas ----------
exports.getTasks = (req, res) => {
  res.json(db.tareas);
};

// ---------- ZONA B: Crear tarea ----------
exports.createTask = (req, res) => {
  const { titulo, descripcion, prioridad } = req.body;
  const nuevaTarea = {
    id: Date.now(),
    titulo,
    descripcion: descripcion || "",
    prioridad,
    estado: "por_hacer",
  };
  db.tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
};

// ---------- ZONA C: Actualizar / mover tarea ----------
exports.updateTask = (req, res) => {
  const tarea = db.tareas.find((t) => t.id == req.params.id);
  if (!tarea) return res.status(404).json({ error: "Tarea no encontrada" });
  Object.assign(tarea, req.body);
  res.json(tarea);
};

// ---------- ZONA D: Eliminar tarea ----------
exports.deleteTask = (req, res) => {
  db.tareas = db.tareas.filter((t) => t.id != req.params.id);
  res.json({ message: "Tarea eliminada" });
};
