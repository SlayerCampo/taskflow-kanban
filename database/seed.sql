-- ============================================================
-- seed.sql — Datos de prueba (usuarios y tareas de ejemplo)
-- Encargado: equipo de Base de Datos
-- Ejecutar DESPUÉS de esquema.sql
-- ============================================================

USE kanban_db;

INSERT INTO usuarios (nombre, correo, password) VALUES
('Usuario Demo Uno', 'demo1@taskflow.com', 'contraseña_ya_encriptada_1'),
('Usuario Demo Dos', 'demo2@taskflow.com', 'contraseña_ya_encriptada_2'),
('Usuario Demo Tres', 'demo3@taskflow.com', 'contraseña_ya_encriptada_3');

INSERT INTO tareas (titulo, descripcion, prioridad, estado, usuario_id) VALUES
('Diseñar logo', 'Crear el logotipo de TaskFlow', 'alta', 'por_hacer', 1),
('Crear tabla de usuarios', '', 'media', 'por_hacer', 1),
('Conectar login', 'Unir frontend con /api/auth/login', 'alta', 'en_progreso', 1),
('Estilos del header', '', 'baja', 'terminado', 1),
('Configurar .env', 'Definir variables de entorno locales', 'media', 'por_hacer', 2),
('Diseñar columnas del tablero', '', 'alta', 'en_progreso', 2),
('Middleware de autenticación', '', 'alta', 'por_hacer', 3),
('Probar endpoints con Postman', '', 'media', 'por_hacer', 3),
('Responsive en celular', '', 'media', 'terminado', 2),
('Documentar README', '', 'baja', 'por_hacer', 1);
