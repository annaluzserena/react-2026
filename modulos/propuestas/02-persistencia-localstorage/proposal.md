# Propuesta: Persistencia con localStorage

**Change name:** `02-persistencia-localstorage`

---

## Intent

Las tareas de Taskify se pierden al recargar la página. Los alumnos necesitan aprender `useEffect` para sincronizar estado con `localStorage`. Este cambio persiste las tareas localmente para que sobrevivan a recargas del navegador.

## Scope

### In Scope
- Leer tareas de `localStorage` al iniciar la app
- Guardar tareas en `localStorage` cuando cambien
- Manejar estado de carga inicial simulada (opcional)
- Tratar errores de `localStorage` corrupto

### Out of Scope
- Sincronización con API (próximo cambio: `05-api-axios`)
- Exportar/importar datos

## New Capabilities
- `persistencia-tareas`: Guardar y recuperar tareas desde localStorage

## Modified Capabilities
- `gestion-tareas`: Ahora persiste datos localmente

## Approach

1. Inicializar `useState` con función lazy para leer de `localStorage`
2. Agregar `useEffect` con `[tareas]` como dependencia para guardar
3. Envolver el parse en `try/catch` para manejar datos corruptos

## Affected Areas

| Area | Impact |
|------|--------|
| `src/App.jsx` | Modified — lazy init + useEffect para persistir |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Alumnos olvidan dependencia en useEffect | Medium | Explicar las 3 variantes de useEffect |
| localStorage corrupto rompe la app | Low | try/catch en lazy init |

## Rollback

Revertir `src/App.jsx` al estado anterior (sin useEffect ni localStorage).

## Success Criteria

- [ ] Tareas persisten al recargar la página (F5)
- [ ] Tareas persisten al cerrar y reabrir el navegador
- [ ] Si localStorage está vacío, la app arranca con lista vacía
