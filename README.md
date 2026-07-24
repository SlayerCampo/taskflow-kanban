# TaskFlow Kanban

¡Bienvenido al proyecto TaskFlow Kanban! Esta es una aplicación de gestión de tareas ágil.

## 🚨 ¡IMPORTANTE! Flujo de Trabajo y Reglas del Repositorio

Para evitar conflictos al hacer *merge* y asegurar que todos podamos trabajar sin pisarnos los pies, sigue **estrictamente** estas reglas.

### 1. Clonar el repositorio

Para empezar a trabajar, cada miembro del equipo debe clonar este repositorio en su computadora:

```bash
git clone <URL_DEL_REPOSITORIO>
cd taskflow-kanban
```

### 2. Ramas de Trabajo (Branches)

Tenemos dos ramas principales en las que debes trabajar, dependiendo de tu rol. **Nadie debe trabajar directamente en `main`.**

#### 🎨 Equipo Frontend
Si tu rol es desarrollar la interfaz gráfica (HTML, CSS, JavaScript del cliente), debes trabajar **únicamente** en la rama `frontend`:

```bash
git checkout frontend
git pull origin frontend
```

#### ⚙️ Equipo Backend
Si tu rol es desarrollar el servidor, la API o la base de datos (Node.js, Express, DB), debes trabajar **únicamente** en la rama `backend`:

```bash
git checkout backend
git pull origin backend
```

---

### 3. Regla de Oro: ¡No toques carpetas que no te corresponden!

*   **Equipo Frontend:** **SOLO** puedes editar, crear o eliminar archivos dentro de la carpeta `frontend/`. No modifiques nada dentro de `backend/` ni archivos de configuración de la raíz (salvo que se acuerde en equipo).
*   **Equipo Backend:** **SOLO** puedes editar, crear o eliminar archivos dentro de la carpeta `backend/`. No modifiques nada dentro de `frontend/`.

> **💡 Tip:** Si abres un archivo, lee los comentarios en la parte superior. Hemos dejado instrucciones detalladas (como "ZONA A", "ZONA B") y comentarios en el código sobre qué debes hacer y qué áreas te corresponden editar para que no te pierdas.

---

### 4. Buenas Prácticas

1.  **Haz commits pequeños y descriptivos:** `git commit -m "feat: añadir botón de eliminar tarea"` en lugar de `git commit -m "cambios"`.
2.  **Sincroniza frecuentemente:** Antes de empezar a programar, haz `git pull origin <tu-rama>` para traer los últimos cambios de tus compañeros.
3.  **Comenta tu código:** Especialmente las lógicas complejas. ¡Tus compañeros te lo agradecerán!
4.  **No subas basura:** Asegúrate de que `.gitignore` esté funcionando y no subas carpetas como `node_modules`.

---

## 🚀 Visión a Futuro: ¿Qué será TaskFlow Kanban?

Actualmente tenemos la base, pero nuestro objetivo es construir una plataforma robusta. Estas son las funcionalidades futuras que desarrollaremos:

1.  **Autenticación Real (JWT):** Los usuarios podrán registrarse e iniciar sesión de forma segura para tener sus propios tableros privados.
2.  **Base de Datos en Producción:** Conexión a una base de datos real (PostgreSQL/MySQL o MongoDB) para persistencia total.
3.  **Múltiples Tableros:** Los usuarios no estarán limitados a un solo tablero; podrán crear tableros distintos para diferentes proyectos.
4.  **Colaboración en Tiempo Real:** Integración de WebSockets (ej. Socket.io) para que si dos personas ven el mismo tablero, los cambios (mover tareas) se reflejen al instante sin recargar.
5.  **Asignación y Etiquetas:** Poder asignar tareas a miembros específicos y usar etiquetas de colores (Prioridad Alta, Bug, Feature).
6.  **Modo Oscuro:** Indispensable para cualquier aplicación moderna.

¡Mucho éxito a todos y a programar!
