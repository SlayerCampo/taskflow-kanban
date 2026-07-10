/* ============================================================
   server.js — Arranca el servidor y conecta las rutas
   Encargado: Líder Técnico / equipo Backend (los dos se ponen de acuerdo aquí,
   este archivo casi no se toca una vez armado, así que casi no genera conflictos)
============================================================ */

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");
const tasksRoutes = require("./routes/tasks.routes");

const app = express();
app.use(cors());
app.use(express.json());

// ---------- ZONA A: Registrar rutas ----------
app.use("/api/auth", authRoutes);
app.use("/api/tasks", tasksRoutes);

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "TaskFlow API funcionando" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
