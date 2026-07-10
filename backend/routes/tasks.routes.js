/* ============================================================
   tasks.routes.js — Rutas para crear, mover y borrar tareas
   Encargado: Dev Backend 2
============================================================ */

const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasks.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", authMiddleware, tasksController.getTasks);
router.post("/", authMiddleware, tasksController.createTask);
router.put("/:id", authMiddleware, tasksController.updateTask);
router.delete("/:id", authMiddleware, tasksController.deleteTask);

module.exports = router;
