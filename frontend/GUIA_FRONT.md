# Guía de Desarrollo Frontend - TaskFlow Kanban

**Proyecto:** TaskFlow Kanban
**Equipo:** Desarrollo Frontend (2 personas)
**Fase Actual:** Maquetación Visual y Simulación de Lógica (Sin Backend)

---

## 1. Introducción y Estado Actual

El proyecto cuenta con las bases visuales principales implementadas utilizando **Tailwind CSS**.

Se han dejado **grandes bloques de espacio** en el código HTML y JavaScript comentados con la etiqueta `TUTORIAL PARA EL EQUIPO` y `ESPACIO PARA SU CÓDIGO`. Estos son los lugares exactos donde deberán aplicar sus conocimientos lógicos.

### Páginas Creadas:

- `landingPage.html` (Página Principal - Pública)
- `login.html` (Inicio de Sesión)
- `register.html` (Registro)
- `index.html` (Tablero Kanban Privado)

> **Respuesta a la pregunta sobre la indexación:**
> La página principal (`landingPage.html`) **SÍ debe indexarse** para que los clientes puedan encontrarla en Google. Sin embargo, el tablero Kanban privado (`index.html`) **NO debe indexarse**. Por este motivo, ya se agregó la etiqueta `<meta name="robots" content="noindex, nofollow">` en `index.html`.

---

## 2. Pasos Lógicos y Tareas a Completar

Ambos desarrolladores pueden comenzar a conectar la lógica de JavaScript para darle vida a la interfaz antes de que el equipo backend termine su parte.

### Paso 1: Configurar el Modo Oscuro (Dark Mode)

El diseño ya soporta "Dark Mode" de Tailwind CSS (`class="dark"`).

- **Archivo a editar:** `js/app.js` (Sección 1)
- **Tarea:** En la página principal y el tablero, hay un botón con el ID `theme-toggle`. Deben escribir la lógica para que, al hacer clic, cambie la clase `dark` de la etiqueta `<html>` de todo el documento.
- **Reto:** Deben guardar la selección en `localStorage` (ej. `localStorage.setItem('theme', 'dark')`) para que, al recargar o cambiar de página (de la landing al login, por ejemplo), se mantenga el color elegido. El código base ya está preparado.

### Paso 2: Validación de Formularios (Login y Register)

- **Archivos a editar:** `login.html`, `register.html` y crear un archivo `js/auth.js` (opcional).
- **Tarea:** Usen JavaScript para capturar el evento `submit` de los formularios (`id="login-form"` e `id="register-form"`).
- **Reto:**
  1. Prevengan el comportamiento por defecto (`e.preventDefault()`).
  2. Validen que la contraseña tenga al menos 6 caracteres.
  3. Muestren un error en pantalla (cambiando clases de Tailwind, ej. texto rojo) si los datos están mal.
  4. Si todo es correcto, guarden un usuario falso en `localStorage` y usen `window.location.href = 'index.html'` para redirigir.

### Paso 3: Simulación de Sesión (Protección de Rutas Visulaes)

- **Archivo a editar:** `js/app.js` (Sección 2)
- **Tarea:** El tablero Kanban (`index.html`) no debe ser visto por alguien no registrado.
- **Reto:** Cada vez que cargue `index.html`, usen JS para verificar si existe el usuario falso en `localStorage`. Si no existe, usen `window.location.href = 'login.html'` para expulsar al usuario. Si existe, capturen el elemento `<div id="user-info">` y escriban su nombre ahí (`elemento.textContent = nombre`).

### Paso 4: Cerrar Sesión

- **Archivo a editar:** `js/app.js` (Sección 3)
- **Tarea:** En `index.html` hay un botón con ID `logout-button`.
- **Reto:** Escribir un evento `click` que borre el usuario del `localStorage` (`localStorage.removeItem(...)`) y lo envíe de regreso a `landingPage.html`.

---

## 3. Guía de Estilos y Estructura Impecable

- **Tailwind CSS:** Todo está diseñado con Tailwind mediante CDN. No deben escribir CSS puro a menos que sea estrictamente necesario para animaciones muy complejas.
- **Colores:** Se definió una paleta "Brand" (tonos morados de TaskFlow) en la configuración interna del `<head>` de cada archivo HTML.
- **Textos Legales:** El pie de página (`landingPage.html`) ya cuenta con correos falsos de ejemplo (`soporte@taskflow-ejemplo.edu`), derechos de autor actualizados, términos y privacidad, dándole una apariencia 100% profesional para clientes.

¡Mucho éxito en el desarrollo lógico de la interfaz! Busquen los bloques de `TUTORIAL PARA EL EQUIPO` en el código.
