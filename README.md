> [!IMPORTANT]
> **Por favor, lee este documento completo antes de empezar a escribir código o subir cambios.**

## 🛠 Guía de Contribución y Flujo de Trabajo con Git

Para mantener nuestro proyecto ordenado y evitar conflictos que nos cuesten tiempo, **todo el equipo debe seguir estrictamente este flujo de trabajo**.

### 1. Clonar el repositorio
El primer paso es traer el código a tu máquina local.
```bash
git clone <url_del_repositorio>
```

### 2. Selección de Rama
El proyecto está dividido en dos ramas principales: `frontend` y `backend`. Dependiendo de tu equipo o tarea, debes cambiar a la rama correspondiente.
```bash
# Si eres del equipo de Frontend:
git checkout frontend

# Si eres del equipo de Backend:
git checkout backend
```

### 3. La Regla de Oro del Espacio de Trabajo 🥇
> [!CAUTION]
> **Solo debes modificar los archivos que se encuentran dentro de la carpeta con el mismo nombre que tu rama.**
> - Si estás en la rama `frontend`, **solo tocas** los archivos dentro de la carpeta `frontend/` (ej. `frontend/js/app.js`, `frontend/js/kanban.js`, `frontend/css/`).
> - Si estás en la rama `backend`, **solo tocas** los archivos dentro de la carpeta `backend/` (ej. `backend/server.js`, `backend/routes/`).

### 4. Guardar Cambios (Add y Commit)
A medida que avances con tus tareas, asegúrate de empaquetar tus cambios de forma clara:
```bash
# Agregar todos los cambios
git add .

# O agregar archivos específicos
git add frontend/js/kanban.js

# Hacer el commit con un mensaje descriptivo
git commit -m "feat: Se agregó la función de arrastrar y soltar en el tablero kanban"
```

### 5. Recomendación de Seguridad antes del Push
Antes de subir tus cambios, **siempre** trae las últimas actualizaciones de tu rama para evitar problemas o conflictos de código.
```bash
git pull origin <rama>
```
*(Reemplaza `<rama>` por `frontend` o `backend`)*

### 6. Subida de Cambios (Push)
Sube tu progreso al repositorio remoto:
```bash
git push origin <rama>
```

### 7. PASO FINAL OBLIGATORIO: Pull Requests (PR)
> [!WARNING]
> **ESTÁ TOTALMENTE PROHIBIDO HACER MERGE DIRECTAMENTE A LA RAMA PRINCIPAL (MAIN/MASTER).**
>
> Para que tus cambios sean aprobados y unidos al proyecto final, es **obligatorio abrir un Pull Request (PR)** en nuestra plataforma (GitHub/GitLab). Esto me permite a mí (como líder/administrador) revisar tu código, hacer pruebas y finalmente aceptar los cambios de forma segura.

---

## 🎭 Trabajo Independiente y Uso de "Mocks"

Para que podamos avanzar a toda velocidad sin bloquearnos unos a otros, estamos trabajando con **Mocks (simulaciones de datos)**.

### ¿Qué es un mock y por qué lo usamos?
Un **mock** es simplemente una imitación de los datos (como un JSON falso o variables en memoria) que eventualmente nos enviará el servidor real o la base de datos.

Gracias a los mocks:
- **El equipo de Frontend** y **el equipo de Backend** pueden avanzar de forma **100% independiente**.
- Aunque el Backend no esté completamente listo o la base de datos no esté conectada, el Frontend puede probar cómo se ven las tarjetas del **Tablero Kanban**, la experiencia visual del inicio de sesión y las alarmas de las tareas, garantizando que todo el flujo de la interfaz funcione.

**Ejemplo Práctico en nuestro Proyecto:**
Actualmente en el Frontend (dentro de archivos como `frontend/js/app.js` y `frontend/js/kanban.js`), podrías encontrar estructuras marcadas como datos falsos o de prueba. Todo el flujo interactivo de Drag-and-Drop, login y visualización funciona con ellos. **Cuando el Backend (`backend/server.js`) y sus controladores estén listos y conectados a la base de datos, únicamente cambiaremos la fuente de datos para llamar a la API real**, sin tener que reprogramar la interfaz.

---

## 🌟 Título y Descripción del Proyecto: TaskFlow Kanban

**TaskFlow Kanban** es un sistema integral de organización y productividad enfocado en el rendimiento, la estética y la facilidad de uso. 

### Características Principales
| Característica | Descripción |
| --- | --- |
| 📋 **Dashboard Kanban** | Tablero visual de tareas interactivo con funciones fluidas de *arrastrar y soltar* (drag-and-drop). |
| 🔐 **Autenticación** | Sistema seguro de inicio de sesión y gestión de tu cuenta. |
| ⏱️ **Estudio y Alarmas** | Herramientas integradas como métodos de estudio (ej. Pomodoro), alertas y recordatorios. |
| ✨ **Diseño Moderno** | Interfaz estética, limpia, intuitiva y moderna ("bonita y fácil de usar"). |

### 🚀 Visión a Futuro
Actualmente, TaskFlow Kanban está enfocado como una herramienta muy potente de **uso individual**. Sin embargo, la meta clara a futuro es transformarlo en una **plataforma online, multiusuario y colaborativa en tiempo real** para gestionar flujos de trabajo complejos con todo tu equipo.
