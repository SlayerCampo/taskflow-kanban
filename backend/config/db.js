/* ============================================================
   db.js — Conexión con la base de datos
   Encargado: equipo de Base de Datos

   MIENTRAS LA BASE DE DATOS REAL NO ESTÉ LISTA: se exporta un
   objeto "mock" con las mismas funciones que tendrá la conexión
   real, para que Backend pueda seguir programando sin esperar.
   Cuando el esquema.sql esté importado, reemplazar este archivo
   por la conexión real (ej. con mysql2 o pg) manteniendo los
   mismos nombres de función para no romper nada en los controllers.
============================================================ */

// ---------- ZONA A: Conexión MOCK (borrar cuando haya base real) ----------
const mockDB = {
  usuarios: [],
  tareas: [
    { id: 1, titulo: "Diseñar logo", prioridad: "alta", estado: "por_hacer", usuario_id: 1 },
  ],
};

// ---------- ZONA B: Conexión REAL (descomentar y completar cuando esté lista) ----------
// const mysql = require('mysql2/promise');
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });
// module.exports = pool;

module.exports = mockDB;
