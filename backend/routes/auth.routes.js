/* ============================================================
   auth.routes.js — Rutas de registro e inicio de sesión
   Encargado: Dev Backend 1
============================================================ */

const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
