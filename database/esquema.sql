-- ============================================================
-- esquema.sql — Tablas de Usuarios y Tareas
-- Encargado: equipo de Base de Datos
-- ============================================================

CREATE DATABASE IF NOT EXISTS kanban_db;
USE kanban_db;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL, -- se guarda encriptada (bcrypt), nunca en texto plano
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tareas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  descripcion TEXT,
  prioridad ENUM('alta', 'media', 'baja') NOT NULL DEFAULT 'media',
  estado ENUM('por_hacer', 'en_progreso', 'terminado') NOT NULL DEFAULT 'por_hacer',
  usuario_id INT NOT NULL,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);
