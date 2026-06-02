# Tasks: Persistencia con localStorage

**Change:** `02-persistencia-localstorage`

---

## Phase 1: Persistencia

- [ ] 1.1 Modificar `src/App.jsx` — cambiar `useState([])` a lazy initializer que lee de localStorage con try/catch
- [ ] 1.2 Modificar `src/App.jsx` — importar `useEffect`, agregar efecto que guarda en localStorage con `[tareas]` como dependencia

## Phase 2: Verificación

- [ ] 2.1 Agregar tareas, recargar página (F5), verificar que persisten
- [ ] 2.2 Abrir DevTools → Application → Local Storage, verificar datos guardados
- [ ] 2.3 `npm run build` sin errores
