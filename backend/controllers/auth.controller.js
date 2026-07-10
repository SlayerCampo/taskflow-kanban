/* ============================================================
   auth.controller.js — Lógica de registro, login y contraseñas
   Encargado: Dev Backend 1

   TODO: reemplazar la lógica MOCK por bcrypt (hash de contraseñas)
   y jsonwebtoken (generar el JWT real) cuando el equipo lo instale.
============================================================ */

const db = require("../config/db");

// ---------- ZONA A: Registro ----------
exports.register = (req, res) => {
  const { nombre, correo, password } = req.body;
  if (!nombre || !correo || !password) {
    return res.status(400).json({ error: "Faltan datos" });
  }
  // TODO: encriptar password con bcrypt antes de guardar
  const nuevoUsuario = { id: Date.now(), nombre, correo, password };
  db.usuarios.push(nuevoUsuario);
  res.status(201).json({ message: "Usuario creado" });
};

// ---------- ZONA B: Login ----------
exports.login = (req, res) => {
  const { correo, password } = req.body;
  const usuario = db.usuarios.find((u) => u.correo === correo && u.password === password);
  if (!usuario) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }
  // TODO: generar JWT real con jsonwebtoken
  const tokenFalso = "fake-jwt-token-123";
  res.json({ token: tokenFalso, nombre: usuario.nombre });
};
