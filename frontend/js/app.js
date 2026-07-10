/* ============================================================
   app.js — Login, sesión y rutas visuales
   Encargado: Dev Frontend 1
   No agregues aquí lógica del tablero/tarjetas: eso va en kanban.js

   MIENTRAS BACKEND NO ESTÉ LISTO: usa MOCK_USER de abajo.
   Cuando el equipo de Backend entregue el endpoint real de login,
   solo reemplaza la función loginMock() por un fetch() real —
   el resto del archivo no debería necesitar cambios.
============================================================ */

// ---------- ZONA A: Datos falsos (MOCK) mientras no hay backend real ----------
const MOCK_USER = {
  nombre: "Usuario de Prueba",
  token: "fake-jwt-token-123",
};

// ---------- ZONA B: Función de login (cambiar por fetch real cuando exista el endpoint) ----------
function loginMock(email, password) {
  // TODO Backend: reemplazar por:
  // fetch('http://localhost:5000/api/auth/login', { method: 'POST', body: JSON.stringify({email, password}) })
  return Promise.resolve(MOCK_USER);
}

// ---------- ZONA C: Pintar usuario en el header ----------
function renderUser(user) {
  const el = document.getElementById("user-info");
  if (el) el.textContent = user.nombre;
}

// ---------- ZONA D: Arranque ----------
document.addEventListener("DOMContentLoaded", () => {
  loginMock("demo@taskflow.com", "1234").then(renderUser);
});
