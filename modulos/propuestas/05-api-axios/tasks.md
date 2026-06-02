# Tasks: API con Axios + json-server

**Change:** `05-api-axios`

---

## Phase 1: Infraestructura

- [ ] 1.1 `npm install axios json-server`
- [ ] 1.2 Agregar script `"server": "json-server --watch src/db.json --port 3001"` en package.json
- [ ] 1.3 Crear `src/db.json` con `{ "tareas": [] }`
- [ ] 1.4 Crear `src/services/api.js` — instancia Axios con baseURL y timeout

## Phase 2: Migrar App.jsx

- [ ] 2.1 Agregar loading state y error state en App: `const [cargando, setCargando] = useState(true)` y `const [error, setError] = useState(null)`
- [ ] 2.2 Agregar `useEffect` que hace GET a `/tareas` al montar, con manejo de loading/error
- [ ] 2.3 Modificar `agregarTarea` — convertir a async, hacer POST, actualizar estado con `res.data`
- [ ] 2.4 Modificar `toggleTarea` — convertir a async, hacer PATCH con `{ completada: !tarea.completada }`
- [ ] 2.5 Modificar `borrarTarea` — convertir a async, hacer DELETE
- [ ] 2.6 Eliminar persistencia de localStorage (ya no necesaria)

## Phase 3: UI Feedback

- [ ] 3.1 Mostrar "Cargando..." mientras se obtienen datos
- [ ] 3.2 Mostrar "Error al cargar las tareas" si la API no responde

## Phase 4: Verificación

- [ ] 4.1 Correr `npm run server` en una terminal y `npm run dev` en otra
- [ ] 4.2 Probar CRUD completo contra la API real
- [ ] 4.3 Verificar que los cambios persisten en `db.json`
- [ ] 4.4 `npm run build` sin errores
