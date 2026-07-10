# TaskFlow Kanban

Dashboard Kanban de práctica — proyecto del grupo de desarrollo.

## Cómo levantar el proyecto

1. Clonar el repositorio: `git clone https://github.com/SlayerCampo/taskflow-kanban`
2. Instalar dependencias del backend: `npm install`
3. Importar la base de datos: ejecutar `database/esquema.sql` y luego `database/seed.sql`
4. Copiar `.env.example` como `.env` y llenarlo con tus datos locales
5. Encender el servidor: `npm start` (por defecto en `http://localhost:5000`)
6. Abrir `frontend/index.html` con la extensión **Live Server** de VS Code

## Estructura de zonas (para evitar conflictos en Git)

Cada archivo del `frontend/` y del `backend/` está dividido en bloques comentados
tipo `ZONA A`, `ZONA B`, etc. Cada persona del equipo edita **solo su zona**
asignada dentro del archivo. Esto evita que dos personas toquen las mismas
líneas al mismo tiempo y reduce muchísimo los conflictos al hacer merge.

| Archivo | Zonas | Responsable |
|---|---|---|
| `frontend/index.html` | A: Nav/Header · B: Tablero · C: Modal · D: Footer | Frontend 1 (A, D) / Frontend 2 (B, C) |
| `frontend/css/styles.css` | Estilos globales | Frontend 1 |
| `frontend/css/kanban.css` | Estilos del tablero/tarjetas | Frontend 2 |
| `frontend/js/app.js` | Login y sesión | Frontend 1 |
| `frontend/js/kanban.js` | Lógica del tablero | Frontend 2 |
| `backend/routes/auth.routes.js` + `controllers/auth.controller.js` | Autenticación | Backend 1 |
| `backend/routes/tasks.routes.js` + `controllers/tasks.controller.js` | Tareas | Backend 2 |
| `backend/middlewares/auth.middleware.js` | Seguridad | DevSecOps/QA |
| `database/*.sql` | Esquema y datos de prueba | Base de Datos |

## Nota sobre los datos falsos (mock)

Mientras el Backend y la Base de Datos real no estén conectados, el Frontend
usa datos de ejemplo (`MOCK_TASKS`, `MOCK_USER`) directamente en el JS, y el
Backend usa un `db.js` con datos en memoria. Cuando cada pieza real esté lista,
solo hay que reemplazar esas partes marcadas con `TODO` — el resto del código
no debería necesitar cambios. Así todo el equipo puede trabajar en paralelo
desde el día uno.
